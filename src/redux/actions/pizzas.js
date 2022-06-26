import axios from "axios"

export const setLoaded = (payload) => (
  {
    type: 'SET_LOADED',
    payload
  }
)

export const fetchItems = (category, sortBy) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false
  })
  axios
    // .get(`http://localhost:3001/pizzas?category=${category}_sort=${sortBy}&_order=desc`)
    // .get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
    .get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => {
      dispatch(setItems(data))
    })
}

export const setItems = (items) => (
  {
    type: 'SET_ITEMS',
    payload: items
  }
)
