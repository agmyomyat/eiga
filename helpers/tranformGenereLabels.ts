import { orderBy } from 'lodash'
// import { MenuProvided} from 'react-instantsearch-core'

interface RefinementItem {
   label: string
   value: string
   count: number
   isRefined: boolean
}

interface CurrentRefinement {
   attribute: string
   currentRefinement: string
   id: string
   index: string
   label: string
   value: string
}

interface RefinementItems extends Array<RefinementItem> {}

export const transformLabels = (items: RefinementItems) => {
   const newItems = items.map((item) => ({
      ...item,
      label: item.label[0].toUpperCase() + item.label.slice(1),
   }))

   return orderBy(newItems, 'label', 'asc')
}

export const transformLabel = (items: CurrentRefinement[]) =>
   items.map((item) => ({
      ...item,
      currentRefinement:
         item.currentRefinement[0].toUpperCase() +
         item.currentRefinement.slice(1),
   }))
