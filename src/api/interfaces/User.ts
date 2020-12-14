interface User {
  id: string
  email: string | null
  name: string | null
  likedQuestions?: string[]
}

export default User
