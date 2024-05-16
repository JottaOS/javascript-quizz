import { Pagination } from '@mui/material'
import { useQuestionStore } from '../stores/questions'
import { Question } from './Question'
import { QUESTIONS_LIMIT } from '../helpers/constants'

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currrentQuestion = useQuestionStore((state) => state.currentQuestion)
  const changeQuestion = useQuestionStore((state) => state.changeQuestion)

  const questionInfo = questions[currrentQuestion]

  const onPaginationChange = (_: React.ChangeEvent<unknown>, value: number) => {
    changeQuestion(value - 1)
  }

  return (
    <>
      <Pagination
        count={QUESTIONS_LIMIT}
        showFirstButton
        showLastButton
        onChange={onPaginationChange}
        page={currrentQuestion + 1}
      />
      <Question info={questionInfo} />
    </>
  )
}
