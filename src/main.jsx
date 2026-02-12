import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import {Root} from "./routes/root";
import {Index} from "./routes/index";
import { Browse } from './routes/browse';
// import { loader as browseLoader } from './routes/browse.loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, element: <Index />
      },
      {
        path: "browse",
        element: <Browse />,
        // loader: browseLoader
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
