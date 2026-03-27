import React from 'react';

interface Project {
  name: string;
  date: string;
  time: string;
}

const projects: Project[] = [
  {
    name: 'Project Alpha',
    date: '2025-04-26',
    time: '14:30 PM',
  },
  {
    name: 'Project Beta',
    date: '2025-04-24',
    time: '12:00 PM',
  },
  {
    name: 'Project Gamma',
    date: '2025-04-20',
    time: '09:45 AM',
  },
];

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Projects Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-[1.5px] rounded-xl shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-400">{project.name}</h2>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Date:</strong> {project.date}
              </p>
              <p className="text-sm text-gray-400">
                <strong>Time:</strong> {project.time}
              </p>
            </div>
            <div className="flex justify-between items-center space-x-2 p-4 rounded-b-xl">
              <button className="border-[1.5px] border-white  cursor-pointer text-white py-2 px-4 rounded-md">
                View Details
              </button>
              <button className="border-[1.5px] border-white cursor-pointer bg-red-800 text-white py-2 px-4 rounded-md">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
