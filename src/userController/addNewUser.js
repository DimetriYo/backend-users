import { users } from "../db/users.js"

export const addNewUser = (newUser) => {
  try {
    users.push(newUser)
    return
  } catch (e) {
    return e
  }
}
