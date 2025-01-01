
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/Error/ErrorPage';
import Home from './Components/Home/Home';
import Root from './Components/Roots/Root';
import Statistics from './Components/Statistics/Statistics';
import ViewDetails from './Components/View/ViewDetails';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'viewDetails/:gadgetId',
        element: <ViewDetails></ViewDetails>,
        loader: ()=> fetch('/products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
