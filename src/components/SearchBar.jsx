import React from 'react'

function SearchBar({ setSearch }) {
  return (
    <input
      className="input"
      placeholder="Qidirish: sartarosh, elektrik..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;