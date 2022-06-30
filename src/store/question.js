import create from 'zustand'
import { persist } from 'zustand/middleware'

const useStoreQuestion = create(persist(
  (set, get) => ({
    questionData: [],
    addQuestionData: (newData) => set({ questionData: [...(get().questionData || []), newData] }),
  }),
  {
    name: 'questionData',
    getStorage: () => localStorage,
  }
))

export default useStoreQuestion;