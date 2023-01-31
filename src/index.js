import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { HashRouter } from "react-router-dom";

/*
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Error from './routes/Error';
import FormList from './routes/FormList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/formList',
    element: <FormList />
  }
]);
<RouterProvider router={router} />
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
