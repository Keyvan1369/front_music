import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import MusicPage from './musicPage';

const router = createBrowserRouter([
 {
    path: "/",
    element: <App />,
 },
 {path : "/music/:id",element : <MusicPage/>}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
