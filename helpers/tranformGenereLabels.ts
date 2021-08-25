export const transfromLabels  = (items) =>
   items.map(item => ({
      ...item,
      label: item.label[0].toUpperCase() + item.label.slice(1),
   }));
