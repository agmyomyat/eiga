import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useErrorMessage = create(
   combine({ message: '' }, (set) => ({
      setErrorMessage: (msg: string) => set(() => ({ message: msg })),
   }))
)
