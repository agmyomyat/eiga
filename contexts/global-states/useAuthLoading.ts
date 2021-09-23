
import create from 'zustand'
import { combine } from 'zustand/middleware'

/**
 * use to trigger getUserquery in profile
 */
export const useAuthLoading= create(
	combine(
		{ loading: false},
		(set) => ({
			setLoading: (state:boolean) => set(() => ({ loading:state })),
		})

	)
)