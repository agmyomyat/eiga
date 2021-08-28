import { orderBy } from 'lodash';

export const transfromLabels = items => {
   const newItems = items.map(item => ({
      ...item,
      label: item.label[0].toUpperCase() + item.label.slice(1),
   }));
   return orderBy(newItems, 'label', 'asc');
};
