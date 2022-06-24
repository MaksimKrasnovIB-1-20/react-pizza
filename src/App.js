import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {

  // window.test = () => {
  //   dispatch(fetchPizzas())
  // }

  return (
    <div className="wrapper" >
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters
//     }
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items))
//     }
//   }
// )(App)

// export default App

// class App extends React.Component {

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         this.props.setPizzas(data.pizzas)
//       })
//   }

//   render() {
//     return (
//       <div className="wrapper" >
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path='/' element={<Home items={this.props.items} />} />
//             <Route path='/cart' element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App({ items }) {

//   const [pizzas, setPizzas] = React.useState([])

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         setPizzas(data.pizzas)
//       })
//     // fetch('http://localhost:3000/db.json')
//     // .then((response) => response.json())
//     // .then(json => {
//     //   setPizzas(json.pizzas)
//     // })
//   }, [])

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path='/' element={<Home items={pizzas} />} />
//           <Route path='/cart' element={<Cart />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App
