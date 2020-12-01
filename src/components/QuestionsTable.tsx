import React from "react"
import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from "@material-ui/core"
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
  onDelete: (id: Question["id"]) => void
}> = ({ questions, onDelete: handleDelete }) => {
  return (
    <Table style={styles.fixedTable}>
      <TableHead>
        <TableRow>
          <TableCell style={styles.narrowCol}>Id</TableCell>

          <TableCell>Name</TableCell>

          <TableCell style={styles.narrowCol} />
        </TableRow>
      </TableHead>

      <TableBody>
        {questions.map(({ id, text }) => (
          <TableRow key={id}>
            <TableCell style={styles.narrowCol}>{id}</TableCell>

            <TableCell>{text}</TableCell>

            <TableCell style={styles.narrowCol}>
              <IconButton onClick={() => handleDelete(id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default QuestionsTable
