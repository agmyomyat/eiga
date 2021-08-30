import { orderBy } from 'lodash';
// import { MenuProvided} from 'react-instantsearch-core'

interface RefinementItem {
   label: string;
   value: string;
   count: number;
   isRefined: boolean;
}

interface RefinementItems extends Array<RefinementItem> {}

export const transfromLabels = (items: RefinementItems) => {
   const newItems = items.map(item => ({
      ...item,
      label: item.label[0].toUpperCase() + item.label.slice(1),
   }));

   return orderBy(newItems, 'label', 'asc');
};
