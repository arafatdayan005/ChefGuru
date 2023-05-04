import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blogs from './components/Blogs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Recipes from './components/Recipes';
import ErrorPage from './components/ErrorPage';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://madchef-server-arafatdayan005.vercel.app/recipes/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);

reportWebVitals();
