import React from "react";
import moment from "moment";

import { Table } from "reactstrap";

import ActionCell from "./modules/ActionCell";
import translates from "../../translate";

function TableContainer({ data = null, translate, headers, deleteAction }) {
  return (
    <Table>
      <thead>
        <tr>
          {headers.map((item, i) => (
            <th key={i}>{{ ...translate, ...translates.required }[item]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            {headers.map((key, i) =>
              key === "action" ? (
                <ActionCell id={item._id} key={i} deleteAction={deleteAction} />
              ) : (
                <td key={i}>
                  {key === "practiceExam" ||
                  key === "theoryExam" ||
                  key === "paymentDate" ||
                  key === "startDate" ||
                  key === "endDate" ||
                  key === "conclusionDate" ||
                  key === "createdAt" ||
                  key === "updatedAt"
                    ? moment(item[key]).format("DD.MM.YYYY")
                    : item[key]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableContainer;
