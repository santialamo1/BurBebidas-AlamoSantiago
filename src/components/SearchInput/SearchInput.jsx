import React from 'react';

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar bebidas..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;