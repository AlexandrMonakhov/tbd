import { api } from "./api";

export function getContracts() {
    return api()
        .get("contract/getAll")
}

export function signup(data) {
    return api()
        .post("api/signup", data)
}

export function signup1(data) {
    return api()
        .post("api/signup", data)
}
