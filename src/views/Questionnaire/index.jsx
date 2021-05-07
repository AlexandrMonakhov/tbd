import React, { useEffect, useState } from "react";
import { TableContainer } from "../../components";
import { getQuestionnaires } from "../../services/connections";
import translates from "../../translate";

import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Questionnaire = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);

    getQuestionnaires()
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

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div className="view-box">
        <h1>Таблица "Анкеты"</h1>
        <Link to={"/questionnaires/add"}>
          <AiFillPlusSquare />
        </Link>
      </div>
      <TableContainer
        data={data}
        translate={translates.questionnaire}
        headers={headers}
      />
    </div>
  );
};

export default Questionnaire;
