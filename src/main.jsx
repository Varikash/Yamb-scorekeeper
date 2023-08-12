import './global.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './services/reducers/index.js';



const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
)
