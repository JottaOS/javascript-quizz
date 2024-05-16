import {
  Alert,
  AlertTitle,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Snackbar,
  Typography
} from '@mui/material'
import { type Question as QuestionType } from '../types/types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionStore } from '../stores/questions'

export const Question = ({ info }: { info: QuestionType }) => {
  const { id, answers, code, question, userSelectedAnswer, isCorrectUserAnswer, correctAnswer } = info
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  return (
    <Card variant="outlined" sx={{ bgcolor: '#222', p: 4, textAlign: 'left'}}>
      <CardContent>
        <Typography variant="h5">{question}</Typography>
        <SyntaxHighlighter language="javascript" style={gradientDark}>
          {code}
        </SyntaxHighlighter>
        <List disablePadding sx={{ bgcolor: '#333' }}>
          {answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton onClick={() => selectAnswer(id, index)}>
                <ListItemText primary={answer} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Snackbar open={userSelectedAnswer !== undefined} autoHideDuration={6000}>
          <Alert severity={isCorrectUserAnswer ? 'success' : 'error'} variant="outlined" sx={{ width: '100%' }}>
            <AlertTitle>{isCorrectUserAnswer ? 'Correcto' : 'Incorrecto'}</AlertTitle>
            {isCorrectUserAnswer
              ? 'Muy bien!'
              : `La respuesta correcta es ${answers[correctAnswer]}`}
          </Alert>
        </Snackbar>
      </CardActions>
    </Card>
  )
}
