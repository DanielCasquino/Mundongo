import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Access from './pages/access/access';
import Discover from './pages/discover/discover';
import Profile from './pages/profile/profile';
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
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'post',
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
