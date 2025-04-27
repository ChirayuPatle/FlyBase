import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';

const domains = [
  'yourapp.vercel.app',
  'customdomain.com',
  'testdomain.dev',
];

const Domain: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDomains = domains.filter((domain) =>
    domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handleAddNewDomain = () => {
    alert('Redirecting to domain purchase/connect flow...');
  };

  return (
    <div className=" flex flex-col items-center mx-auto mb-16 justify-center p-8">
      <div className="w-full max-w-3xl border-[1.5px] p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Select a Domain</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search domains..."
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Domains List */}
        <div className="space-y-4 mb-8">
          {filteredDomains.length > 0 ? (
            filteredDomains.map((domain, index) => (
              <button
                key={index}
                onClick={() => handleDomainSelect(domain)}
                className={`w-full text-left p-4 rounded-md border ${
                  selectedDomain === domain
                    ? 'bg-green-600 text-white border-green-600'
                    : 'cursor-pointer'
                } transition-all`}
              >
                {domain}
              </button>
            ))
          ) : (
            <p className="text-center text-gray-500">No domains found.</p>
          )}
        </div>

        {/* Add New Domain */}
        <button
          onClick={handleAddNewDomain}
          className="w-full flex items-center justify-center p-4 border-2 border-dashed rounded-md text-white hover:bg-gray-600 hover:text-white"
        >
          <Plus className="mr-2" />
          Add New Domain
        </button>

        {/* Continue Button */}
        <div className="mt-8 flex justify-end">
          <button
            disabled={!selectedDomain}
            className={`py-3 px-6 rounded-md font-semibold ${
              selectedDomain
                ? 'text-white border-[1.5px]'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Domain;
