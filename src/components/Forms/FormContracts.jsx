import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import moment from "moment";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  addContract,
  getContract,
  updateContract,
} from "../../services/connections";

const FormContracts = () => {
  const history = useHistory();

  const [data, setData] = useState({
    contractNumber: "",
    inn: "",
    studentNumber: "",
    conclusionDate: new Date(),
    purpose: "",
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateContract(data)
        .then((response) => {
          history.push("/contracts");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      addContract(data)
        .then((response) => {
          history.push("/contracts");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const tryToGetContract = (id) => {
    getContract(id)
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
    tryToGetContract(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание договора"}</h1>
      <Form onSubmit={sendForm} className="form">
        <FormGroup>
          <Label for="contractNumber">Номер договора</Label>
          <Input
            type="text"
            name="contractNumber"
            id="contractNumber"
            placeholder="Номер договора"
            value={data.contractNumber}
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
          <Label for="conclusionDate">Дата заключения</Label>
          <Input
            type="date"
            name="conclusionDate"
            id="conclusionDate"
            placeholder="Дата заключения"
            value={moment(data.conclusionDate).format("YYYY-MM-DD")}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="purpose">Цель</Label>
          <Input
            type="text"
            name="purpose"
            id="purpose"
            placeholder="Цель"
            value={data.purpose}
            onChange={handleInput}
          />
        </FormGroup>
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormContracts;
