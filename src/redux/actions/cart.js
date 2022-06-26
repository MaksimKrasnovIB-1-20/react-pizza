export const addCartItem = (obj) => ({
    type: 'ADD_CART_ITEM',
    payload: obj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removeCartItem = () => ({
    type: 'REMOVE_CART_ITEM'
})
