import React from 'react';
// import PropTypes from "prop-types";

const Categories = React.memo(function ({ activeCategory, items, onClickCategory }) {

  return (
    <div className="categories" >
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {
          items && items.map((name, index) =>
          (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          )
          )
        }
      </ul>
    </div >
  )
})

// Categories.propTypes = {
//   activeCategory: PropTypes.number.isRequired,
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onClickCategory: PropTypes.func
// }

// Categories.defaultProps = {
//   activeCategory: null,
//   items: []
// }

export default Categories

// class Categories extends React.Component {

//   state = {
//     activeItem: null
//   }

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index
//     })
//     // this.state.activeItem = index
//     // this.forceUpdate()
//   }

//   render() {

//     const { items, onClickItem } = this.props

//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {
//             items.map((name, index) =>
//             (<li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>
//               {name}
//             </li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }
