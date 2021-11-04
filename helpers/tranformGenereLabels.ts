// import { MenuProvided} from 'react-instantsearch-core'

export const transformLabels = (item) => {
   if (typeof item === 'string') {
      const newItem = item[0].toUpperCase() + item.slice(1)
      return newItem
   }
}

export const transformLabel = (items) =>
   items.map((item) => ({
      ...item,
      currentRefinement:
         item.currentRefinement[0].toUpperCase() +
         item.currentRefinement.slice(1),
   }))
