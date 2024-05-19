import { Card, CardActions, CardContent, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { type Question as QuestionType } from '../types/types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionStore } from '../stores/questions'
import { getBackgroundColor } from '../helpers/utils'

export const Question = ({ info }: { info: QuestionType }) => {
  const { id, answers, code, question, userSelectedAnswer } = info
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  const createHandleClick = (index: number) => () => {
    selectAnswer(id, index)
  }

  return (
    <Card variant="outlined" sx={{ bgcolor: '#222', p: 4, textAlign: 'left' }}>
      <CardContent>
        <Typography variant="h5">{question}</Typography>
        <SyntaxHighlighter language="javascript" style={gradientDark}>
          {code}
        </SyntaxHighlighter>
        <List disablePadding sx={{ bgcolor: '#333' }}>
          {answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton
                disabled={userSelectedAnswer != null}
                onClick={createHandleClick(index)}
                sx={{ backgroundColor: getBackgroundColor(info, index) }}
              >
                <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
