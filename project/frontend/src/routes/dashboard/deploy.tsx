import axios from "axios";
import { Github, Loader, Upload, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const Deploy: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [environment, setEnvironment] = useState('Production');
  const [visibility, setVisibility] = useState('Public');
  const [loading, setLoading] = useState(false);
  const [deploymentUrl, setDeploymentUrl] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!projectName.trim()) {
      toast.error('Please enter a project name');
      return;
    }
    if (!repoUrl.trim()) {
      toast.error('Please enter a repository URL');
      return;
    }

    const loadingToast = toast.loading('Deploying your project...');
    setLoading(true);
    setDeploymentUrl(null);

    try {
      const response = await axios.post("http://localhost:8080/deploy", {
        projectName,
        repoUrl,
        environment,
        visibility
      });

      if (!response || !response.data) {
        throw new Error("No response data received");
      }

      const { deploymentId, deploymentUrl } = response.data;

      if (!deploymentId && !deploymentUrl) {
        throw new Error("Deployment ID or URL missing from response");
      }

      setDeploymentUrl(deploymentUrl || `http://localhost:8080/site/${deploymentId}`);

      toast.success('Project deployed successfully!', {
        description: `Your project "${projectName}" is live!`,
        id: loadingToast,
      });

    } catch (error) {
      toast.error('Deployment failed', {
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
        id: loadingToast,
      });
      console.error("Deployment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 mx-auto md:mt-16 h-fit sm:mt-6 max-w-5xl border-[1.5px] rounded-lg shadow-xl">
      <h1 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Create New Project</h1>

      <div className="space-y-4 sm:space-y-6">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-2">
            Project Name
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="my-awesome-project"
          />
        </div>

        {/* Git Repository */}
        <div>
          <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-300 mb-2">
            Git Repository
          </label>
          <div className="flex items-center bg-gray-800 rounded-md overflow-hidden">
            <div className="bg-gray-700 p-3 flex-shrink-0">
              <Github size={20} className="text-gray-300" />
            </div>
            <input
              id="repoUrl"
              type="url"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white focus:outline-none"
              placeholder="https://github.com/username/repo"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">We'll clone and deploy your repository.</p>
        </div>

        {/* Environment Select */}
        <div>
          <label htmlFor="environment" className="block text-sm font-medium text-gray-300 mb-2">
            Deployment Environment
          </label>
          <select
            id="environment"
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          >
            <option value="Production">Production</option>
            <option value="Preview">Preview</option>
            <option value="Development">Development</option>
          </select>
        </div>

        {/* Deploy Button */}
        <div className="pt-2">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className={`w-full py-3 font-medium rounded-md flex items-center justify-center transition-colors ${
              loading ? 'bg-green-800 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {loading ? (
              <>
                <Loader size={18} className="mr-2 animate-spin" />
                Deploying...
              </>
            ) : (
              <>
                <Upload size={18} className="mr-2" />
                Deploy Project
              </>
            )}
          </button>
        </div>

        {/* Deployment URL Display */}
        {deploymentUrl && (
          <div className="mt-4 p-4 bg-green-900 rounded-lg text-green-200 flex flex-col items-center">
            <p className="text-sm mb-2">🚀 Your project is deployed successfully!</p>
            <a
              href={deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm transition-all"
            >
              Visit Site <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deploy;
