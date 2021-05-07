import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import moment from "moment";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addFile, getFile, updateFile } from "../../services/connections";

const FormFile = () => {
  const history = useHistory();

  const [data, setData] = useState({
    fileNumber: "",
    questionnaireNumber: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateFile(data)
        .then((response) => {
          history.push("/files");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      addFile(data)
        .then((response) => {
          history.push("/files");
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const tryToGetFile = (id) => {
    getFile(id)
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
    tryToGetFile(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание картотеки"}</h1>
      <Form onSubmit={sendForm} className="form">
        <FormGroup>
          <Label for="fileNumber">Номер картотеки</Label>
          <Input
            type="text"
            name="fileNumber"
            id="fileNumber"
            placeholder="Номер картотеки"
            value={data.fileNumber}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="questionnaireNumber">Номер анкеты</Label>
          <Input
            type="text"
            name="questionnaireNumber"
            id="questionnaireNumber"
            placeholder="Номер анкеты"
            value={data.questionnaireNumber}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="startDate">Дата начала</Label>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Дата начала"
            value={moment(data.startDate).format("YYYY-MM-DD")}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">Дата окончания</Label>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            placeholder="Дата окончания"
            value={moment(data.endDate).format("YYYY-MM-DD")}
            onChange={handleInput}
          />
        </FormGroup>
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormFile;
