import React from "react";

import { Form, Button } from "react-bootstrap";

function FormStudent() {
  return (
    <Form className="form">
      <h2 className="form-title">Форма "Ученики"</h2>
      <Form.Group>
        <Form.Label>Номер ученика</Form.Label>
        <Form.Control type="text" placeholder="Номер ученика" />
      </Form.Group>
      <Form.Group>
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" placeholder="ФИО" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Паспорт</Form.Label>
        <Form.Control type="text" placeholder="Паспорт" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Номер инструктора</Form.Label>
        <Form.Control type="text" placeholder="Номер инструктора" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}

export default FormStudent;
