import Header from './routes/header'
import Footer from './routes/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    // This is only for dashboard 
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout