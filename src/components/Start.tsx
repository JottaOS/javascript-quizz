import { Button } from '@mui/material'
import { useQuestionStore } from '../stores/questions'
import { QUESTIONS_LIMIT } from '../helpers/constants'


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
