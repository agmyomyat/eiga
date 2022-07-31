import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useProgress = create(
   combine({ isAnimating: false }, (set) => ({
      setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
   }))
)
