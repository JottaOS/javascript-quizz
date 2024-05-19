import { IconButton, Stack } from '@mui/material'
import { useQuestionStore } from '../stores/questions'
import { Question } from './Question'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currrentQuestion = useQuestionStore((state) => state.currentQuestion)
  const goPreviousQuestion = useQuestionStore((state) => state.goPreviousQuestion)
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)

  const questionInfo = questions[currrentQuestion]

  return (
    <>
      <Stack direction={'row'} gap={2} justifyContent={'center'} alignItems={'center'}>
        <IconButton onClick={goPreviousQuestion} disabled={currrentQuestion < 1}>
          <ArrowBackIosNew />
        </IconButton>
        {currrentQuestion + 1} / {questions.length}
        <IconButton onClick={goNextQuestion} disabled={currrentQuestion === questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
    </>
  )
}
