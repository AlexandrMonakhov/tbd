import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  addTransport,
  getTransport,
  updateTransport,
} from "../../services/connections";

const FormTransports = () => {
  const history = useHistory();

  const [data, setData] = useState({
    plateNumber: "",
    mileage: "",
    brand: "",
    model: "",
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateTransport(data)
        .then((response) => {
          history.push("/transports");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      addTransport(data)
        .then((response) => {
          history.push("/transports");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const tryToGetTransport = (id) => {
    getTransport(id)
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
    tryToGetTransport(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание транспорта"}</h1>
      <Form onSubmit={sendForm} className="form">
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
        <FormGroup>
          <Label for="mileage">Пробег</Label>
          <Input
            type="text"
            name="mileage"
            id="mileage"
            placeholder="Пробег"
            value={data.mileage}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="brand">Марка</Label>
          <Input
            type="text"
            name="brand"
            id="brand"
            placeholder="Марка"
            value={data.brand}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="model">Модель</Label>
          <Input
            type="text"
            name="model"
            id="model"
            placeholder="Модель"
            value={data.model}
            onChange={handleInput}
          />
        </FormGroup>
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormTransports;
