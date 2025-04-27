import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import './App.css'
// import App from './App.tsx'
=======
import App from './App.tsx'
>>>>>>> ed816aed017c7f8f56e317db39a023066bb556db
import router from './router';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
