import React, { useState } from 'react';
import { Trash2, Save, RefreshCw } from 'lucide-react';

const Setting: React.FC = () => {
  const [projectName, setProjectName] = useState('my-awesome-project');
  const [visibility, setVisibility] = useState<'Public' | 'Private'>('Public');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoDeploy, setAutoDeploy] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSaveChanges = () => {
    alert('Setting saved successfully ✅');
  };

  const handleDeleteProject = () => {
    setDeleting(true);
    setTimeout(() => {
      alert('Project deleted ❌');
      setDeleting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-[1280px] flex flex-col text-white">
      {/* Header */}
      <div className="border-b border-black py-6 px-8 sticky top-0 z-10">
        <h1 className="text-3xl font-bold">Setting</h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage project details, visibility, and advanced configurations.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-6xl mx-auto p-8 space-y-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project Information Card */}
        <div className="border-2 h-80 border-black rounded-lg p-6 space-y-5">
          <h2 className="text-xl font-semibold">Project Information</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="projectName" className="text-gray-400 text-sm">
              Project Name
            </label>
            <input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter your project name"
            />
          </div>
        </div>

        {/* Visibility Card */}
        <div className="border-2 h-80 border-black rounded-lg p-6 space-y-5">
          <h2 className="text-xl font-semibold">Visibility</h2>
          <div className="flex gap-4">
            {['Public', 'Private'].map((option) => (
              <button
                key={option}
                onClick={() => setVisibility(option as 'Public' | 'Private')}
                className={`flex-1 py-3 rounded-md border ${
                  visibility === option
                    ? 'bg-green-600 text-white'
                    : 'bg-transparent text-gray-400 border-gray-700'
                } hover:bg-green-700 transition`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Setting Card */}
        <div className="border-2 h-80 border-black rounded-lg p-6 space-y-5">
          <h2 className="text-xl font-semibold">Advanced Setting</h2>

          {/* Auto Deploy Toggle */}
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div>
              <p className="font-medium">Auto Deploy</p>
              <p className="text-sm text-gray-400">Automatically deploy on changes</p>
            </div>
            <button
              onClick={() => setAutoDeploy(!autoDeploy)}
              className={`w-14 h-8 flex items-center rounded-full p-1 ${
                autoDeploy ? 'bg-green-600' : 'bg-gray-600'
              } transition-all`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
                  autoDeploy ? 'translate-x-6' : ''
                } transition-transform`}
              />
            </button>
          </div>

          {/* Notifications Toggle */}
          <div className="flex justify-between items-center py-3">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-400">Receive updates for deployments</p>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-14 h-8 flex items-center rounded-full p-1 ${
                notificationsEnabled ? 'bg-green-600' : 'bg-gray-600'
              } transition-all`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
                  notificationsEnabled ? 'translate-x-6' : ''
                } transition-transform`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="border-t-2  border-black py-6 px-8 flex justify-between sticky bottom-0">
        <button
          onClick={handleSaveChanges}
          className="flex items-center gap-2 border border-green-600 text-green-400 hover:bg-green-600 hover:text-white py-2 px-6 rounded-md transition"
        >
          <Save size={20} />
          Save Changes
        </button>

        <button
          onClick={handleDeleteProject}
          disabled={deleting}
          className="flex items-center gap-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white py-2 px-6 rounded-md transition disabled:opacity-50"
        >
          {deleting ? (
            <>
              <RefreshCw className="animate-spin" size={20} />
              Deleting...
            </>
          ) : (
            <>
              <Trash2 size={20} />
              Delete Project
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Setting;
