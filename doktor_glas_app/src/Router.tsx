import { createBrowserRouter } from 'react-router-dom';
import { AboutUs, Hero, Posts, Layout } from './pages';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Hero />
      },
      {
        path: '/info',
        element: <AboutUs />
      },
      {
        path: '/posts',
        element: <Posts />
      }
    ]
  }
]);
