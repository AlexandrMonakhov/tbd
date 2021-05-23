import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  addStudent,
  getStudent,
  updateStudent,
} from "../../services/connections";

const FormStudents = () => {
  const history = useHistory();

  const [data, setData] = useState({
    studentNumber: "",
    initials: "",
    passport: "",
    instructorNumber: "",
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateStudent(data)
        .then((response) => {
          history.push("/students");
          console.log(response.data);
        })
        .catch((e) => {
          let str = "";
          if (e.response) {
            str = e.response.data.message;
          } else {
            str = e.message;
          }
          console.error(str);
        });
    } else {
      addStudent(data)
        .then((response) => {
          history.push("/students");
          console.log(response.data);
        })
        .catch((e) => {
          let str = "";
          if (e.response) {
            str = e.response.data.message;
          } else {
            str = e.message;
          }
          console.error(str);
        });
    }
  };

  const tryToGetStudent = (id) => {
    getStudent(id)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    tryToGetStudent(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание студента"}</h1>
      <Form onSubmit={sendForm} className="form">
        <FormGroup>
          <Label for="studentNumber">Номер студента</Label>
          <Input
            type="text"
            name="studentNumber"
            id="studentNumber"
            placeholder="Номер студента"
            value={data.studentNumber}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="initials">ФИО</Label>
          <Input
            type="text"
            name="initials"
            id="initials"
            placeholder="ФИО"
            value={data.initials}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="passport">Паспорт</Label>
          <Input
            type="text"
            name="passport"
            id="passport"
            placeholder="Паспорт"
            value={data.passport}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="instructorNumber">Номер инструктора</Label>
          <Input
            type="text"
            name="instructorNumber"
            id="instructorNumber"
            placeholder="Номер инструктора"
            value={data.instructorNumber}
            onChange={handleInput}
          />
        </FormGroup>
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormStudents;
