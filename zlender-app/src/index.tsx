import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// import style from './App/Layout/styles.scss';
import { router } from './App/Router/Routes';
import { store } from './App/Store/configureStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
