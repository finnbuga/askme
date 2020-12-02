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

const QuestionsTable: React.FC<{
  questions: Question[]
  onDelete: (id: Question["id"]) => Promise<any>
}> = ({ questions, onDelete }) => {
  const [isLoading, setIsLoading] = useState<Record<any, boolean>>({})

  const handleDelete = async (id: Question["id"]) => {
    setIsLoading((state) => ({ ...state, [id]: true }))
    await onDelete(id)
    setIsLoading((state) => ({ ...state, [id]: false }))
  }

  return (
    <Table style={styles.fixedTable}>
      <TableHead>
        <TableRow>
          <TableCell style={styles.narrowCol}>User Id</TableCell>

          <TableCell>Name</TableCell>

          <TableCell style={styles.narrowCol} />
        </TableRow>
      </TableHead>

      <TableBody>
        {questions.map(({ id, text, userId }) => (
          <TableRow key={id}>
            <TableCell style={styles.narrowCol}>{userId}</TableCell>

            <TableCell>{text}</TableCell>

            <TableCell style={styles.narrowCol}>
              <IconButton onClick={() => handleDelete(id)}>
                {isLoading[id] ? <CircularProgress size={24} /> : <DeleteIcon />}
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default QuestionsTable
