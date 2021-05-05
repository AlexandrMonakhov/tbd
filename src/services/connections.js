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
        .put("contract/", data)
}

/* Инструкторы */

export function getInstructors() {
    return api()
        .get("instructor/getAll")
}