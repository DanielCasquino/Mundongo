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
import Post from './pages/post/post';

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
  {
    path: 'post/:id',
    element: <Post />,
  },
]);

function checkSession() {
  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate('/access');
  }
}

function App() {
  checkSession();
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
