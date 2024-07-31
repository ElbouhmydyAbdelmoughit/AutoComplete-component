// src/App.js
import React, { useState } from 'react';
import CustomAutocomplete from './components/AutoCompleteComponent';
import './App.css';

const options = [
  { label: 'The Shawshank Redemption', value: 1 },
  { label: 'The Godfather', value: 2 },
  { label: 'The Dark Knight', value: 3 },
  { label: 'Pulp Fiction', value: 4 },
  { label: 'Forrest Gump', value: 5 },
  { label: 'Inception', value: 6 },
  { label: 'The Matrix', value: 7 },
  { label: 'Fight Club', value: 8 },
  { label: 'The Lord of the Rings: The Return of the King', value: 9 },
  { label: 'Interstellar', value: 10 },
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (value) => {
    setSelectedOptions(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80">
        <CustomAutocomplete
          options={options}
          onChange={handleChange}
          multiple={true}
          className="mt-6"
        />
      </div>
    </div>
  );
}

export default App;
