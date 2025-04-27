import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LandingPage from './routes/landing/landing';
import LoginPage from './routes/auth/login';
import SignupPage from './routes/auth/signup';
import Dashboard from './routes/dashboard/dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LandingPage />} />

      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />

      <Route path='/dashboard' element={<Dashboard />}>
        {/* <Route index element={<Overview />} /> */}
        {/* <Route path='deploy' element={<Deploy />} /> */}
        {/* <Route path='storage' element={<Storage />} /> */}
        {/* <Route path='domain' element={<Domain />} /> */}
        {/* <Route path='setting' element={<Setting />} /> */}
      </Route>
    </>
  )
);

export default router;
