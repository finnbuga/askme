import { Fade, List, ListItem } from "@mui/material"

import type { Question } from "api/questions"

import { DeleteButton } from "./DeleteButton"

export const QuestionsList: React.FC<{ questions: Question[] }> = ({ questions }) => {
  return (
    <List>
      {questions.map(({ id, text }) => (
        <Fade in key={id} timeout={300}>
          <ListItem secondaryAction={<DeleteButton id={id} />} divider sx={{ py: 3, px: 0 }}>
            {text}
          </ListItem>
        </Fade>
      ))}
    </List>
  )
}
