import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { arrayUnion, arrayRemove } from "firebase/firestore"

import { db } from "./firebase"
import { getCurrentUserId } from "./auth"
import type { Question } from "./questions"

export interface User {
  id: string
  email: string | null
  name: string | null
  likedQuestions: Question["id"][]
}

// type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

// type ExpendRecursively<T> = T extends object
//   ? T extends infer O
//     ? { [K in keyof O]: ExpendRecursively<O[K]> }
//     : never
//   : T

// export type ExpandUser = Expand<User>

// export type ExpendRecursivelyUser = ExpendRecursively<User>

// export type Id<T> = T extends object ? {} & { [P in keyof T]: Id<T[P]> } : T

const getUserRef = (id?: string) => doc(db, "users", id || getCurrentUserId() || "")

export const addUser = (user: User) => setDoc(getUserRef(), user)

export const getUser = () => getDoc(getUserRef()).then((doc) => doc.data())

export const addLikedQuestion = (questionId: string) =>
  updateDoc(getUserRef(), { likedQuestions: arrayUnion(questionId) })

export const removeLikedQuestion = (questionId: string) =>
  updateDoc(getUserRef(), { likedQuestions: arrayRemove(questionId) })
