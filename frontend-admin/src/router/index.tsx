import ContentPage from '@/pages/ContentPage/ContentPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/content',
        element: <ContentPage />,
      },
    ],
  },
]);
