import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import moment from "moment";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  addReceipt,
  getReceipt,
  updateReceipt,
} from "../../services/connections";

const FormReceipt = () => {
  const history = useHistory();

  const [data, setData] = useState({
    receiptNumber: "",
    studentNumber: "",
    paymentDate: new Date(),
    sum: "",
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateReceipt(data)
        .then((response) => {
          history.push("/receipts");
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
      addReceipt(data)
        .then((response) => {
          history.push("/receipts");
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

  const tryToGetReceipt = (id) => {
    getReceipt(id)
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
    tryToGetReceipt(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание квитанции"}</h1>
      <Form onSubmit={sendForm} className="form">
        <FormGroup>
          <Label for="receiptNumber">Номер квитанции</Label>
          <Input
            type="text"
            name="receiptNumber"
            id="receiptNumber"
            placeholder="Номер квитанции"
            value={data.receiptNumber}
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
          <Label for="paymentDate">Дата оплаты</Label>
          <Input
            type="date"
            name="paymentDate"
            id="paymentDate"
            placeholder="Дата оплаты"
            value={moment(data.paymentDate).format("YYYY-MM-DD")}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sum">Сумма</Label>
          <Input
            type="text"
            name="sum"
            id="sum"
            placeholder="Сумма"
            value={data.sum}
            onChange={handleInput}
          />
        </FormGroup>
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormReceipt;
