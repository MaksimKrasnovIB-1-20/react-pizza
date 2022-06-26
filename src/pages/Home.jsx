import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingPizzaBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchItems } from '../redux/actions/pizzas';
import { addCartItem } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности ⭐', type: 'popular', order: 'desc' },
  { name: 'цене 💸', type: 'price', order: 'desc' },
  { name: 'алфавиту 🔤', type: 'name', order: 'asc' }
]

const Home = () => {

  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchItems(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const onAddPizzaToCart = (obj) => {
    dispatch(addCartItem(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
                onClickAddPizza={onAddPizzaToCart}
                cartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              />))
            : Array(10).fill(0).map((_, index) => (
              <LoadingPizzaBlock key={index} />))
        }
      </div>
    </div>
  )
}

export default Home
