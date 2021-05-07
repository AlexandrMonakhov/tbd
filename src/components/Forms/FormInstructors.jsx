import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  addInstructor,
  getInstructor,
  updateInstructor,
} from "../../services/connections";

const FormInstructors = () => {
  const history = useHistory();

  const [data, setData] = useState({
    instructorNumber: "",
    inn: "",
    sex: "",
    initials: "",
    phoneNumber: "",
    qualification: "",
    plateNumber: "",
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateInstructor(data)
        .then((response) => {
          history.push("/instructors");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      addInstructor(data)
        .then((response) => {
          history.push("/instructors");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const tryToGetInstructor = (id) => {
    getInstructor(id)
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
    tryToGetInstructor(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание инструктора"}</h1>
      <Form onSubmit={sendForm} className="form">
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
        <FormGroup>
          <Label for="inn">ИНН</Label>
          <Input
            type="text"
            name="inn"
            id="inn"
            placeholder="ИНН"
            value={data.inn}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sex">Пол</Label>
          <Input
            type="text"
            name="sex"
            id="sex"
            placeholder="Пол"
            value={data.sex}
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
          <Label for="phoneNumber">Номер телефона</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Номер телефона"
            value={data.phoneNumber}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="qualification">Квалификация</Label>
          <Input
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Квалификация"
            value={data.qualification}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="plateNumber">Номерной знак</Label>
          <Input
            type="text"
            name="plateNumber"
            id="plateNumber"
            placeholder="Номерной знак"
            value={data.plateNumber}
            onChange={handleInput}
          />
        </FormGroup>
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormInstructors;
