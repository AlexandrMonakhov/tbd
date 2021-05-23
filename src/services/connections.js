import { api } from "./api";

/* Договоры */

export function getContracts() {
    return api()
        .get("contract/getAll")
}

export function getContract(id) {
    return api()
        .get(`contract/${id}`)
}

export function addContract(data) {
    return api()
        .post("contract/add", data)
}

export function deleteContract(id) {
    return api()
        .delete(`contract/${id}`)
}

export function updateContract(data) {
    return api()
        .put(`contract/${data._id}`, data)
}

/* Инструкторы */

export function getInstructors() {
    return api()
        .get("instructor/getAll")
}

export function getInstructor(id) {
    return api()
        .get(`instructor/${id}`)
}

export function addInstructor(data) {
    return api()
        .post("instructor/add", data)
}

export function deleteInstructor(id) {
    return api()
        .delete(`instructor/${id}`)
}

export function updateInstructor(data) {
    return api()
        .put(`instructor/${data._id}`, data)
}

/* Картотека */

export function getFiles() {
    return api()
        .get("file/getAll")
}

export function getFile(id) {
    return api()
        .get(`file/${id}`)
}

export function addFile(data) {
    return api()
        .post("file/add", data)
}

export function deleteFile(id) {
    return api()
        .delete(`file/${id}`)
}

export function updateFile(data) {
    return api()
        .put(`file/${data._id}`, data)
}

/* Анкеты */

export function getQuestionnaires() {
    return api()
        .get("questionnaire/getAll")
}

export function getQuestionnaire(id) {
    return api()
        .get(`questionnaire/${id}`)
}

export function addQuestionnaire(data) {
    return api()
        .post("questionnaire/add", data)
}

export function deleteQuestionnaire(id) {
    return api()
        .delete(`questionnaire/${id}`)
}

export function updateQuestionnaire(data) {
    return api()
        .put(`questionnaire/${data._id}`, data)
}

/* Квитанции */

export function getReceipts() {
    return api()
        .get("receipt/getAll")
}

export function getReceipt(id) {
    return api()
        .get(`receipt/${id}`)
}

export function addReceipt(data) {
    return api()
        .post("receipt/add", data)
}

export function deleteReceipt(id) {
    return api()
        .delete(`receipt/${id}`)
}

export function updateReceipt(data) {
    return api()
        .put(`receipt/${data._id}`, data)
}

/* Студенты */

export function getStudents() {
    return api()
        .get("student/getAll")
}

export function getStudent(id) {
    return api()
        .get(`student/${id}`)
}

export function addStudent(data) {
    return api()
        .post("student/add", data)
}

export function deleteStudent(id) {
    return api()
        .delete(`student/${id}`)
}

export function updateStudent(data) {
    return api()
        .put(`student/${data._id}`, data)
}

/* Транспорт */

export function getTransports() {
    return api()
        .get("transport/getAll")
}

export function getTransport(id) {
    return api()
        .get(`transport/${id}`)
}

export function addTransport(data) {
    return api()
        .post("transport/add", data)
}

export function deleteTransport(id) {
    return api()
        .delete(`transport/${id}`)
}

export function updateTransport(data) {
    return api()
        .put(`transport/${data._id}`, data)
}
