import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Importing all the page components
import LandingPage from './routes/landing/landing';
import LoginPage from './routes/auth/login';
import SignupPage from './routes/auth/signup';
import Dashboard from './routes/dashboard/dashboard';
import Deploy from './routes/dashboard/deploy';
import Overview from './routes/dashboard/overview';
import Storage from './routes/dashboard/storage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />

      {/* Dashboard Routes (Protected/Nested) */}
      <Route path='/dashboard' element={<Dashboard />}>
        {/* Index route: when only /dashboard is accessed */}
        <Route index element={<Overview />} />

        {/* Child routes inside dashboard */}
        <Route path='overview' element={<Overview />} />
        <Route path='deploy' element={<Deploy />} />
        <Route path='storage' element={<Storage />} />
      </Route>
    </>
  )
);

export default router;
