import React from "react";

import { Form, Button } from "react-bootstrap";

function FormInstructor() {
  return (
    <Form className="form">
      <h2 className="form-title">Форма "Инструкторы"</h2>
      <Form.Group>
        <Form.Label>Номер инструктора</Form.Label>
        <Form.Control type="text" placeholder="Номер инструктора" />
      </Form.Group>
      <Form.Group>
        <Form.Label>ИНН</Form.Label>
        <Form.Control type="text" placeholder="ИНН" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Пол</Form.Label>
        <Form.Control as="select">
          <option>Мужской</option>
          <option>Женский</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" placeholder="ФИО" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Телефон</Form.Label>
        <Form.Control type="phone" placeholder="Телефон" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Квалификация</Form.Label>
        <Form.Control type="text" placeholder="Квалификация" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Номер транспорта</Form.Label>
        <Form.Control type="text" placeholder="Номер транспорта" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}

export default FormInstructor;
