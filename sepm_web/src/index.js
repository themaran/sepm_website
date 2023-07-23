import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './pages/rootReducer';
import App from './App';
import './index.css';

const store = createStore(rootReducer);

// Use createRoot from "react-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
