import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Access from './pages/access/access';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Discover from './pages/discover/discover';
import Post from './pages/post/post';

import './index.css'

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
    path: 'home',
    element: <Home />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'discover',
    element: <Discover />,
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
