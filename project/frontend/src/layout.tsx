import Header from './routes/header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    // This is only for dashboard 
    <Header/>
    <Outlet />
    </>
  )
}

export default Layout