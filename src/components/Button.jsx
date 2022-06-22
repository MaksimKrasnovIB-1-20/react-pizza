import React from "react";
import classNames from "classnames";

// class Button extends React.Component {
//   render() {
//     return (
//       <button className={classNames('button', {
//         'button--outline': this.props.outline
//       })}>{this.props.children}</button>
//     );
//   }
// }

// function Button(props) {
//   return (
//     <button className={classNames('button', {
//       'button--outline': props.outline
//     })}>{props.children}</button>
//   );
// }

const Button = ({ onClick, className, outline, children }) => {

  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline
      })}>{children}
    </button>
  );
}

export default Button
