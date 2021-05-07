import React, { useEffect, useState } from "react";
import { TableContainer } from "../../components";
import { getStudents, deleteStudent } from "../../services/connections";
import translates from "../../translate";

import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Students = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);

    getStudents()
      .then((response) => {
        const tempData = response.data.data;
        if (tempData.length !== 0) {
          setHeaders([
            ...Object.keys(tempData[0]).filter(
              (item) => item !== "__v" && item !== "_id"
            ),
            "action",
          ]);
        }
        setData(tempData);
      })
      .catch((e) => {
        setError(true);
      });
  };

  const tryToDelete = (id = false) => {
    if (!id) {
      return;
    }

    deleteStudent(id)
      .then((response) => {
        alert(response.data);
        load();
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div className="view-box">
        <h1>Таблица "Студенты"</h1>
        <Link to={"/students/add"}>
          <AiFillPlusSquare />
        </Link>
      </div>
      <TableContainer
        data={data}
        translate={translates.student}
        headers={headers}
        deleteAction={tryToDelete}
      />
    </div>
  );
};

export default Students;
