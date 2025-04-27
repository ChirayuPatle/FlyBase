import { useState } from 'react';
import { Bell, BellOff, HelpCircle, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

  const toggleNotifications = (): void => {
    setNotificationsEnabled((prev) => !prev);
  };

  const userName = "Chirayu Patle";
  const profileImage = "https://i.pravatar.cc/40?img=3";

import { useState } from 'react';
import { Bell, BellOff, HelpCircle, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

  const toggleNotifications = (): void => {
    setNotificationsEnabled((prev) => !prev);
  };

  const userName = "Chirayu Patle";
  const profileImage = "https://i.pravatar.cc/40?img=3";

  return (
<header className="flex items-center justify-between border-b px-5 border-neutral-700 h-16 bg-none backdrop-blur-lg">
      <div className="text-2xl font-bold text-white">
        FlyBase
      </div>

      <div className="flex items-center gap-6">

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2 px-4 rounded-lg flex items-center space-x-2">
          <span>Create</span>
               <ChevronDown size={16} className="text-white" />
        </button>

        <div></div>

        <div className="relative group cursor-pointer">
          <HelpCircle size={24} className="text-gray-400 hover:text-blue-500 transition-colors" />
          <span className="absolute top-10 left-1/2 -translate-x-1/2 transform text-xs bg-gray-900 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
            Need Help?
          </span>
        </div>

        <div onClick={toggleNotifications} className="relative group cursor-pointer">
          {notificationsEnabled ? (
            <Bell size={24} className="text-gray-400 hover:text-blue-500 transition-colors" />
          ) : (
            <BellOff size={24} className="text-gray-400 hover:text-blue-500 transition-colors" />
          )}
          <span className="absolute top-10 left-1/2 -translate-x-1/2 transform text-xs bg-gray-900 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
            Notifications
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-300 text-sm">{userName}</span>
          <img 
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full border-[1px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
