import type User from "./User"

export default interface Question {
  id: string
  text: string
  userId?: User["id"]
}
