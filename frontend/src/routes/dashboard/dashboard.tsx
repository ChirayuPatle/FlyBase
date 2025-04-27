import { Outlet } from 'react-router-dom';
import Header from '../header';
import Menubar from './menubar';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
      <Menubar />
      <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
