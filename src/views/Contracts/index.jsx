import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TableContainer } from "../../components";
import { getContracts, deleteContract } from "../../services/connections";
import translates from "../../translate";

import { AiFillPlusSquare } from "react-icons/ai";

const Contracts = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);

    getContracts()
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
        console.error(e);
        setError(true);
      });
  };

  const tryToDelete = (id = false) => {
    if (!id) {
      return;
    }

    deleteContract(id)
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
        <h1>Таблица "Договоры"</h1>
        <Link to={"/contracts/add"}>
          <AiFillPlusSquare />
        </Link>
      </div>
      <TableContainer
        data={data}
        translate={translates.contracts}
        headers={headers}
        deleteAction={tryToDelete}
      />
    </div>
  );
};

export default Contracts;
