import { generateNewId } from "../../utils/generateNewId.js"
import { addNewUser } from "../../userController/addNewUser.js"

export const postNewUserHandler = (req, res) => {
  const newId = generateNewId()
  const newUser = { ...req.body, id: newId, role: "user" }
  const addUserError = addNewUser(newUser)

  if (!addUserError) {
    res.json(newUser)
  } else {
    res.next(addUserError)
  }
}
