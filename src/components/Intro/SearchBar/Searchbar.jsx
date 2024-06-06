import React from "react";

const Searchbar = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
      className="w-full px-3 py-2 border border-gray-300 rounded"
    />
  );
};

export default Searchbar;
