import React from 'react';

const Navbar = ({ selectedFilter, setSelectedFilter }) => {
  const filters = ['1 Day', '1 Week', '1 Month'];

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-gray-800 p-4 text-white shadow-lg">
      <ul className="flex justify-center space-x-6">
        {filters.map(filter => (
          <li key={filter} className="cursor-pointer transition-transform duration-300 hover:scale-110">
            <button
              className={`px-6 py-3 rounded-full font-semibold shadow-lg ${
                selectedFilter === filter
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
