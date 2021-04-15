import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Provider import :
import { Provider } from 'react-redux';

//react router file :
import {BrowserRouter as  Router} from 'react-router-dom';

//Store file import :
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducer local fi3333333333251\le:
import {FetchPostReducer} from './redux/reducer/FetchPostReducer';

//store file :

const store=createStore(FetchPostReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {/* ======================= create a store modules ================================ */}
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
