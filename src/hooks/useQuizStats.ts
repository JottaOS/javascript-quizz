import { useQuestionStore } from '../stores/questions'

export const useQuizStats = () => {
  const questions = useQuestionStore((state) => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(({ userSelectedAnswer, correctAnswer }) => {
    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}
