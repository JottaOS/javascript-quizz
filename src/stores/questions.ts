import { create } from 'zustand'
import { type State } from '../types/types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'
import * as questionService from '../services/questions'

export const useQuestionStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      answeredQuestions: 0,
      isFinished: false,
      fetchQuestions: async (limit: number) => {
        const questions = await questionService.findAll(limit)
        set({ questions })
      },
      selectAnswer: (questionId: number, answerIndex: number) => {
        const { questions, answeredQuestions } = get()
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

        const newAnsweredQuestions = answeredQuestions + 1

        set({
          questions: newQuestions,
          answeredQuestions: newAnsweredQuestions,
          isFinished: newAnsweredQuestions === questions.length
        })
      },
      goPreviousQuestion: () => {
        const { currentQuestion } = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion })
        }
      },
      goNextQuestion: () => {
        const { currentQuestion, questions } = get()
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion })
        }
      },
      reset: () => {
        set({ currentQuestion: 0, questions: [], isFinished: false, answeredQuestions: 0 })
      }
    }),
    {
      name: 'questions'
    }
  )
)
