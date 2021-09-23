import create from 'zustand'
import { combine } from 'zustand/middleware'

/**
 * use to trigger getUserquery in profile
 */
export const useCheckUser= create(
	combine(
		{ checkUser: false},
		(set) => ({
			setCheckUser: (state:boolean) => set(() => ({ checkUser:state })),
		})

	)
)