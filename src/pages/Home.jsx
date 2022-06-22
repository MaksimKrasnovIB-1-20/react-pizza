import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingPizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

const Home = () => {

  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
            : Array(10).fill(0).map((_, index) => (<LoadingPizzaBlock key={index} />))
        }
      </div>
    </div>
  )
}

export default Home
