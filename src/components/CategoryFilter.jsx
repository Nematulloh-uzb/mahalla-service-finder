import React from 'react'

const categories = ["All", "Sartarosh", "Elektrik", "Oshxona", "Payvandchi"];

function CategoryFilter({ setCategory }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: 10 }}>
      {categories.map((c) => (
        <button
          key={c}
          className="btn"
          onClick={() => setCategory(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;