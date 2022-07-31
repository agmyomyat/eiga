// import { MenuProvided} from 'react-instantsearch-core'

export const transformLabels = (item) => {
   if (typeof item === 'string') {
      const newItem = item[0].toUpperCase() + item.slice(1)
      return newItem
   }
}
