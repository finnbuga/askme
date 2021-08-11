import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  CircularProgress,
  Skeleton,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

import Question from "api/interfaces/Question"
import useDispatchActions from "store/useDispatchActions"
import { questionsActions } from "store/questionsSlice"

export interface QuestionsTableProps {
  questions: Question[]
  isLoading: boolean
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({ questions, isLoading }) => {
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
        {isLoading ? (
          <LoadingRows colSpan={3} rowCount={7} height={48} />
        ) : (
          questions.map(({ id, text }) => (
            <TableRow key={id}>
              <TableCell>{text}</TableCell>

              <TableCell width={50}>
                <IconButton onClick={() => handleDelete(id)}>
                  {isDeleting[id] ? <CircularProgress size={24} /> : <DeleteIcon />}
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

const LoadingRows: React.FC<{ colSpan: number; rowCount: number; height: number }> = ({
  colSpan,
  rowCount,
  height,
}) => (
  <>
    {[...Array(rowCount)].map((_, i) => (
      <TableRow key={i}>
        <TableCell colSpan={colSpan}>
          <Skeleton width="100%">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Skeleton>
        </TableCell>
      </TableRow>
    ))}
  </>
)

export default QuestionsTable
