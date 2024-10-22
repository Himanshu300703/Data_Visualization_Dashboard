import React from 'react';

const FilterComponent = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-container">
      <h3>Filters</h3>
      <select onChange={(e) => onFilterChange('country', e.target.value)}>
        <option value="">Select Country</option>
        {filters.countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select onChange={(e) => onFilterChange('sector', e.target.value)}>
        <option value="">Select Sector</option>
        {filters.sectors.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
