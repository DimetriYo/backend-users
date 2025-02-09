import { users } from "../db/users.js"

export const patchUser = (patchedUserId, data) => {
  const index = users.findIndex(({ id }) => patchedUserId === id)

  if (index === -1) {
    throw new Error("No user with such ID")
  }

  users[index] = { ...users[index], ...data }

  return users[index]
}
