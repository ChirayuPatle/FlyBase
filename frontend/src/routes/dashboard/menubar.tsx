import React, { useState } from 'react';
import { Plus } from 'lucide-react'; // Import the Plus icon from lucide-react
import { Link } from 'react-router-dom';

const HamburgerMenu: React.FC = () => {
  // Set default state to true (open the accordions by default)
  const [isProjectOpen, setIsProjectOpen] = useState(true);
  const [isManageOpen, setIsManageOpen] = useState(true);

  const toggleProject = () => setIsProjectOpen(!isProjectOpen);
  const toggleManage = () => setIsManageOpen(!isManageOpen);

  return (
    <div className="relative overflow-hidden">
      <button className="lg:hidden text-white bg-blue-600 p-4 rounded-md">
        <span>☰</span>
      </button>
      <div className="hidden lg:flex flex-col border-r-[1px] border-gray-600 text-white p-4 w-64 h-screen">
        <div>
          <button
            onClick={toggleProject}
            className="flex justify-between w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Project
            <span>{isProjectOpen ? '▼' : '▶'}</span>
          </button>
          {isProjectOpen && (
            <div className="pl-4 space-y-2">
              <button className="w-full py-2 px-4 text-left hover:bg-gray-700">
                First Project
              </button>
              <Link to='deploy'>
              <button className="w-full py-2 px-4 text-left hover:bg-gray-700 flex items-center">
                 Create Project <Plus className="ml-2 border-2 rounded-xl" />
              </button>
              </Link>
            </div>
          )}
        </div>

        <div className="mt-4">
          <button
            onClick={toggleManage}
            className="flex justify-between w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Manage
            <span>{isManageOpen ? '▼' : '▶'}</span>
          </button>
          {isManageOpen && (
            <div className="pl-4 space-y-2">
              <Link to='deploy'>
              <button className="w-full py-2 px-4 text-left hover:bg-gray-700">
                Deploy
              </button>
              </Link>
              <Link to='domain'>
              <button className="w-full py-2 px-4 text-left hover:bg-gray-700">
                Domain
              </button>
              </Link>
              <Link to='storage'>
              <button className="w-full py-2 px-4 text-left hover:bg-gray-700">
                Storage
              </button>
              </Link>
              <Link to='setting'>
              <button className="w-full py-2 px-4 text-left hover:bg-gray-700">
                Setting
              </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
