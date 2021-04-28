import React from "react";

import { Table } from "react-bootstrap";

function TableContainer() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Номер инструктора</th>
          <th>ИНН</th>
          <th>Пол</th>
          <th>ФИО</th>
          <th>Телефон</th>
          <th>Квалификация</th>
          <th>Номер транспорта</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>526317984689</td>
          <td>Мужской</td>
          <td>Иван Иванович Иванов</td>
          <td>8(999) 123-45-67</td>
          <td>1</td>
          <td>143</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableContainer;
