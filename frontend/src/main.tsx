import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>Form Builder</title>
        </Helmet>

        <RouterProvider router={router} />
        <ToastContainer />
      </HelmetProvider>
  </React.StrictMode>,
);
