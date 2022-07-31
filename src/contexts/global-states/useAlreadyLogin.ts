import create from 'zustand'
import { combine } from 'zustand/middleware'

/**
 * @description
 * this is to detect firebase if user has already login and prevent signUp client from requesting
 * if user change route back to profile again
 */
export const useAlreadyLogin = create(
   combine({ login: false }, (set) => ({
      setLogin: (state: boolean) => set(() => ({ login: state })),
   }))
)
