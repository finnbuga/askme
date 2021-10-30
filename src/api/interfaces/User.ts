import type Question from "./Question"

interface User {
  id: string
  email: string | null
  name: string | null
  likedQuestions: Question["id"][]
}

export default User

// type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

// type ExpendRecursively<T> = T extends object
//   ? T extends infer O
//     ? { [K in keyof O]: ExpendRecursively<O[K]> }
//     : never
//   : T

// export type ExpandUser = Expand<User>

// export type ExpendRecursivelyUser = ExpendRecursively<User>

// export type Id<T> = T extends object ? {} & { [P in keyof T]: Id<T[P]> } : T
