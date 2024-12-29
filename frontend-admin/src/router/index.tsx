import ContentPage from '@/pages/ContentPage/ContentPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
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
]);
