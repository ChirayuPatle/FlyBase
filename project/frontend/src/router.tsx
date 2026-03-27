import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Importing all the page components
import LandingPage from './routes/landing/landing';
import LoginPage from './routes/auth/login';
import SignUpPage from './routes/auth/signup';
import Dashboard from './routes/dashboard/dashboard';
import Deploy from './routes/dashboard/deploy';
import Overview from './routes/dashboard/overview';
import Storage from './routes/dashboard/storage';
import Domain from './routes/dashboard/domain';
import Setting from './routes/dashboard/setting';
import NavFeature from './components/navFeature';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/navfeature' element={<NavFeature />} />

      {/* Dashboard Routes (Protected/Nested) */}
      <Route path='/dashboard' element={<Dashboard />}>
        {/* Index route: when only /dashboard is accessed */}
        <Route index element={<Overview />} />

        {/* Child routes inside dashboard */}
        <Route path='overview' element={<Overview />} />
        <Route path='deploy' element={<Deploy />} />
        <Route path='storage' element={<Storage />} />
        <Route path='domain' element={<Domain />} />
        <Route path='setting' element={<Setting />} />
      </Route>
    </>
  )
);

export default router;
