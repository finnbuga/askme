import React from "react"
import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core"

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

const QuestionsTable: React.FC<{ questions: Question[] }> = ({ questions }) => {
  return (
    <Table style={styles.fixedTable}>
      <TableHead>
        <TableRow>
          <TableCell style={styles.narrowCol}>Id</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {questions.map(({ id, text }) => (
          <TableRow key={id}>
            <TableCell style={styles.narrowCol}>{id}</TableCell>
            <TableCell>{text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default QuestionsTable
