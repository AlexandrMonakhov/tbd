import React, { useState, useEffect } from "react";
import moment from "moment";

import translatesHeaders from "../../translate";

import { Table } from "reactstrap";

import { getContracts } from "../../services/connections";

// TODO: Сделать универсальными ключи фильтрации заголовков 26 строка

function TableContainer() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);
    getContracts()
      .then((response) => {
        const tempData = response.data.contracts;
        if (tempData.length !== 0) {
          setHeaders(
            Object.keys(tempData[0]).filter(
              (item) => item !== "__v" && item !== "_id"
            )
          );
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
    <Table>
      <thead>
        <tr>
          {headers.map((item, i) => (
            <th key={i}>{translatesHeaders.contracts[item]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            {headers.map((key, i) => (
              <td key={i}>
                {key === "conclusionDate" ||
                key === "createdAt" ||
                key === "updatedAt"
                  ? moment(item[key]).format("DD.MM.YYYY")
                  : item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableContainer;
