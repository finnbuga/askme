import React, { useState } from "react"
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  CircularProgress,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { Skeleton } from "@material-ui/lab"

import Question from "api/interfaces/Question"

const styles = {
  fixedTable: {
    tableLayout: "fixed" as "fixed",
  },
  narrowCol: {
    width: 50,
    overflow: "hidden" as "hidden",
    whiteSpace: "nowrap" as "nowrap",
    textOverflow: "ellipsis" as "ellipsis",
  },
}

export interface QuestionsTableProps {
  questions: Question[]
  isLoading: boolean
  onDelete: (id: Question["id"]) => Promise<any>
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({ questions, isLoading, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState<Record<any, boolean>>({})

  const handleDelete = async (id: Question["id"]) => {
    setIsDeleting((state) => ({ ...state, [id]: true }))
    await onDelete(id)
    setIsDeleting((state) => ({ ...state, [id]: false }))
  }

  return (
    <Table style={styles.fixedTable}>
      <TableHead>
        <TableRow>
          <TableCell>Question</TableCell>

          <TableCell style={styles.narrowCol} />
        </TableRow>
      </TableHead>

      <TableBody>
        {!questions ? (
          <LoadingRows colSpan={3} rowCount={7} height={48} />
        ) : (
          questions.map(({ id, text, userId }) => (
            <TableRow key={id}>
              <TableCell>{text}</TableCell>

              <TableCell style={styles.narrowCol}>
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
