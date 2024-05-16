import { useQuestionStore } from '../stores/questions'
import { Question } from './Question'

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currrentQuestion = useQuestionStore((state) => state.currentQuestion)

  const questionInfo = questions[currrentQuestion]
  return (
    <>
      <Question info={questionInfo} />
    </>
  )
}
