import { create } from 'zustand'
import { type State } from '../types/types'

export const useQuestionStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  fetchQuestions: async (limit: number) => {
    const res = await fetch('data.json')
    const json = await res.json()
    const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

    set({ questions })
  }
}))
