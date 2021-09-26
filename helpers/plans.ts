export interface Plan {
   id: number
   month: string
   save: number
   price: number
}

type Plans = Plan[]

export const plans: Plans = [
   {
      id: 1,
      month: '1 Month',
      save: 0,
      price: 3000,
   },
   {
      id: 2,
      month: '3 Months',
      save: 1,
      price: 6000,
   },
]
