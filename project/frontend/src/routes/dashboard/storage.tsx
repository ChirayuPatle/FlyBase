import React, { useState, useRef } from 'react';
import { Trash2, Download, Upload } from 'lucide-react';

interface FileItem {
  name: string;
  size: string;
  updatedAt: string;
}

const initialFiles: FileItem[] = [
  { name: 'build.zip', size: '5', updatedAt: '2025-04-26' },
  { name: 'assets.zip', size: '12', updatedAt: '2025-04-25' },
  { name: 'backup.tar.gz', size: '45', updatedAt: '2025-04-20' },
];

const Storage: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (fileName: string) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      const newFiles: FileItem[] = Array.from(uploadedFiles).map((file) => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2), // Convert size to MB
        updatedAt: new Date().toISOString().split('T')[0], // today's date
      }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const totalUsedMB = files.reduce((acc, file) => acc + parseFloat(file.size), 0);
  const totalStorageMB = 500; // Total storage available
  const usedPercentage = (totalUsedMB / totalStorageMB) * 100;

  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Storage Management</h1>
          <button
            onClick={openFileDialog}
            className="flex items-center gap-2 border-[1.5px] cursor-pointer text-white px-4 py-2 rounded-md"
          >
            <Upload size={20} />
            Upload Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        <div className="mb-10">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all duration-300 ease-in-out"
              style={{ width: `${usedPercentage}%` }}
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-2">
            {totalUsedMB.toFixed(2)} MB used of {totalStorageMB} MB
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.length > 0 ? (
            files.map((file, index) => (
              <div
                key={index}
                className="border-[1.5px] rounded-lg p-5 flex flex-col justify-between hover:bg-gray-100/10 transition cursor-pointer"
              >
                <div>
                  <p className="font-semibold text-white truncate">{file.name}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {file.size} MB • Updated on {file.updatedAt}
                  </p>
                </div>
                <div className="flex justify-end items-center space-x-4 mt-6">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Download size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(file.name)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              No files stored yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Storage;
