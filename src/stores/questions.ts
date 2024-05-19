import { create } from 'zustand'
import { type State } from '../types/types'
import confetti from 'canvas-confetti'

export const useQuestionStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  fetchQuestions: async (limit: number) => {
    const res = await fetch('data.json')
    const json = await res.json()
    const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

    set({ questions })
  },
  selectAnswer: (questionId: number, answerIndex: number) => {
    const { questions } = get()
    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex((q) => q.id === questionId)
    const questionInfo = newQuestions[questionIndex]

    const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

    if (isCorrectUserAnswer) confetti()

    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectUserAnswer,
      userSelectedAnswer: answerIndex
    }
    set({ questions: newQuestions })
  },
  changeQuestion: (questionIndex: number) => set({ currentQuestion: questionIndex })
}))
