interface Steps {
   id: number
   instruction: string
}

export const steps: Steps[] = [
   {
      id: 1,
      instruction: 'Log In with your Google account',
   },
   {
      id: 2,
      instruction: 'Transfer money to this account: Kpay - 091234567.',
   },
   {
      id: 3,
      instruction:
         'Take Screenshot of transferring process and send that photo to our facebook page.',
   },
   {
      id: 4,
      instruction: 'Enjoy your movies!',
   },
]
