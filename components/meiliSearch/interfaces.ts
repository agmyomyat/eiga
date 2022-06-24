import { SelectChangeEvent } from '@mui/material'
import { ReactNode } from 'react'

export interface PRefinementList {
   items: Record<string, unknown>
   type: unknown
   onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void
}
