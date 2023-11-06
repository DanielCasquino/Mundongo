import React, { useEffect, StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';

import Access from './pages/access/access';
import Discover from './pages/discover/discover';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Access />,
  },
  {
    path: 'access',
    element: <Access />,
  },
  {
    path: 'discover',
    element: <Discover />,
  },
]);

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.navigate('/discover');
    } else {
      router.navigate('/access');
    }
  }, []);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
