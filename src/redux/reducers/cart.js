const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART_ITEM': {
      const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems)
        }
      }

      const items = Object.values(newItems).map(obj => obj.items)
      const allItems = [].concat.apply([], items)
      const totalPrice = getTotalPrice(allItems)

      return {
        ...state,
        items: newItems,
        totalCount: allItems.length,
        totalPrice
      }
    }

    case 'CLEAR_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0
      }

    case 'REMOVE_CART_ITEM':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0
      }

    default:
      return state
  }
}

// function cart(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_PIZZA_CART':
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload.id]: !state.items[action.payload.id]
//             ? [action.payload]
//             : [...state.items[action.payload.id], action.payload]
//         }
//       }
//     default:
//       return state

//   }
// }

export default cart
