import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import School from './components/Links/School';
import Story from './components/About/Story';
import Home from './components/home/Home';
import Ml from './components/About/Projects/Projects';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "school",
    element: <School/>,
  },
  {
    path: "story",
    element: <Story/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "ml",
    element: <Ml/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
