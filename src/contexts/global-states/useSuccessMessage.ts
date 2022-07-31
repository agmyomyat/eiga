import create from 'zustand'
import { combine } from 'zustand/middleware'
/** @warning this state use the same modal with error message SO be careful not to use in many cases this only use currently one component */
export const useSuccessMessage = create(
   combine({ message: '' }, (set) => ({
      setSuccessMessage: (msg: string) => set(() => ({ message: msg })),
   }))
)
