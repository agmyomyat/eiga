interface Plan<T> {
   id: T;
   month: string;
   save: T;
   price: T;
}

type Plans = Plan<number>[];

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
      price: 2000,
   },
];
