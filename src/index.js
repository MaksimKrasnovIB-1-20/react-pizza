import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import './scss/app.scss'

import App from './App';
import store from './redux/store';

// const reduxGuide = () => {
//   store.dispatch({
//     type: 'INCREMENT'
//   })
// }

// store.subscribe(() => {
//   console.log('CHANGED', store.getState())
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <button onClick={reduxGuide}>+1</button> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
