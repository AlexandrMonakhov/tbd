import React, { useEffect, useState } from "react";
import { TableContainer } from "../../components";
import { getReceipts } from "../../services/connections";
import translates from "../../translate";

import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Receipt = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);

    getReceipts()
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
        <h1>Таблица "Квитанции"</h1>
        <Link to={"/students/add"}>
          <AiFillPlusSquare />
        </Link>
      </div>
      <TableContainer
        data={data}
        translate={translates.receipt}
        headers={headers}
      />
    </div>
  );
};

export default Receipt;
