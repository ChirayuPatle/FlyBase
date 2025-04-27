import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const Deploy: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [environment, setEnvironment] = useState('Production');
  const [visibility, setVisibility] = useState('Public');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    alert('Project uploaded!');
  };

  return (
    <div className="p-6 mx-auto h-fit mt-5 max-w-4xl border-[1.5px] rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-white mb-6">Upload Your Project</h1>

      <div className="space-y-6">
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-green-400">
            Project Name
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your project name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-400">Upload Project Files</label>
          <div className="mt-2 border-2 border-dashed border-gray-300 p-6 rounded-md text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-600 hover:underline flex flex-col items-center"
            >
              <Upload className="h-8 w-8 mb-2" />
              {selectedFile ? (
                <span className="text-sm">{selectedFile.name}</span>
              ) : (
                <span className="text-sm">Drag and drop or browse to upload your project files</span>
              )}
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="environment" className="block text-sm font-medium text-green-400">
            Deployment Environment
          </label>
          <select
            id="environment"
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Production">Production</option>
            <option value="Staging">Staging</option>
            <option value="Development">Development</option>
          </select>
        </div>

       <div>
          <label htmlFor="visibility" className="block text-sm font-medium text-green-400">
            Project Visibility
          </label>
          <div className="mt-2 flex space-x-4">
            <button
              type="button"
              className={`w-full p-3 border rounded-md text-sm transition-all duration-300 ${
                visibility === 'Public'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-green-100'
              }`}
              onClick={() => setVisibility('Public')}
            >
              Public
            </button>
            <button
              type="button"
              className={`w-full p-3 border rounded-md text-sm transition-all duration-300 ${
                visibility === 'Private'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-green-100'
              }`}
              onClick={() => setVisibility('Private')}
            >
              Private
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="border-[1.5px] border-dashed text-white py-2 px-6 rounded-xl"
          >
            Upload Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
