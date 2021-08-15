import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  CircularProgress,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

import Question from "api/interfaces/Question"
import useDispatchActions from "store/useDispatchActions"
import { questionsActions } from "store/questionsSlice"

export interface QuestionsTableProps {
  questions: Question[]
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({ questions }) => {
  const [isDeleting, setIsDeleting] = useState<Record<any, boolean>>({})
  const { deleteQuestion } = useDispatchActions(questionsActions)

  const handleDelete = async (id: Question["id"]) => {
    setIsDeleting((state) => ({ ...state, [id]: true }))
    await deleteQuestion(id)
    setIsDeleting((state) => ({ ...state, [id]: false }))
  }

  return (
    <Table>
      <TableBody>
        {questions.map(({ id, text }) => (
          <TableRow key={id}>
            <TableCell>{text}</TableCell>

            <TableCell width={50}>
              <IconButton onClick={() => handleDelete(id)}>
                {isDeleting[id] ? <CircularProgress size={24} /> : <DeleteIcon />}
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default QuestionsTable
