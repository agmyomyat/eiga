import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useShouldLogOut = create(
   combine({ logOut: false }, (set) => ({
      setLogOut: (state: boolean) => set(() => ({ logOut: state })),
   }))
)
