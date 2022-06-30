import create from 'zustand'
import { persist } from 'zustand/middleware'

const useStoreQuestion = create(persist(
  (set, get) => ({
    questionData: [],
    addQuestionData: (newData) => set({ questionData: [...(get().questionData || []), newData] }),
    changeQuestionData: (newData) => set({ questionData: newData }),
    deleteQuestionData: (index) => set(() => {
      const newQuestion = [...(get().questionData || [])];
      newQuestion.splice(index, 1);
      return {
        questionData: newQuestion
      }
    })
  }),
  {
    name: 'questionData',
    getStorage: () => localStorage,
  }
))

export default useStoreQuestion;