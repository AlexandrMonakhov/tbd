import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import moment from "moment";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  addQuestionnaire,
  getQuestionnaire,
  updateQuestionnaire,
} from "../../services/connections";

const FormQuestionnaire = () => {
  const history = useHistory();

  const [data, setData] = useState({
    questionnaireNumber: "",
    category: "",
    theoryExam: new Date(),
    practiceExam: new Date(),
    hours: "",
    studentNumber: "",
  });

  const { id } = useParams();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (id) {
      updateQuestionnaire(data)
        .then((response) => {
          history.push("/questionnaires");
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
      addQuestionnaire(data)
        .then((response) => {
          history.push("/questionnaires");
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

  const tryToGetQuestionnaire = (id) => {
    getQuestionnaire(id)
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
    tryToGetQuestionnaire(id);
  }, [id]);

  return (
    <div>
      <h1>{id ? "Редактирование" : "Создание анкеты"}</h1>
      <Form onSubmit={sendForm} className="form">
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
          <Label for="category">Категория</Label>
          <Input
            type="text"
            name="category"
            id="category"
            placeholder="Категория"
            value={data.category}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="theoryExam">Экзамен теория</Label>
          <Input
            type="date"
            name="theoryExam"
            id="theoryExam"
            placeholder="Экзамен теория"
            value={moment(data.theoryExam).format("YYYY-MM-DD")}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="practiceExam">Экзамен практика</Label>
          <Input
            type="date"
            name="practiceExam"
            id="practiceExam"
            placeholder="Экзамен практика"
            value={moment(data.practiceExam).format("YYYY-MM-DD")}
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hours">Количество часов</Label>
          <Input
            type="text"
            name="hours"
            id="hours"
            placeholder="Количество часов"
            value={data.hours}
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
        <Button color="primary">{id ? "Редактировать" : "Добавить"}</Button>
      </Form>
    </div>
  );
};

export default FormQuestionnaire;
