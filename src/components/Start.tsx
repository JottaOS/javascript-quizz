import { Button } from '@mui/material'
import { useQuestionStore } from '../stores/questions'

const QUESTIONS_LIMIT = 10
export const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(QUESTIONS_LIMIT)
  }

  return (
    <Button onClick={handleClick} variant="contained">
      ¡Empezar!
    </Button>
  )
}
