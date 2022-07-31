import create from 'zustand'
import { combine } from 'zustand/middleware'
/**
 * @description
 * to stop timer if movie or series episode and season is already in database
 */
export const useUpdateHistoryTimer = create(
   combine({ timer: true }, (set) => ({
      setTimer: (state: boolean) => set(() => ({ timer: state })),
   }))
)
