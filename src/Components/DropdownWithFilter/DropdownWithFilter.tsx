import React, { Dispatch, SetStateAction, useState } from 'react';
import './main.css';

interface DropdownProps {
  options: string[];
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}

export const DropdownWithFilter: React.FC<DropdownProps> = ({
  options,
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const filteredOptions = options.filter((option) => {
    if (typeof option === 'string') {
      return option.toLowerCase().includes(filter.toLowerCase());
    } else {
      console.log(`ERR >>>`, option);
    }
  });

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      className="dropdown-with-filter-wrapper"
    >
      <p>
        Selected: <span style={{ color: 'red' }}>{value}</span>
      </p>
      <button onClick={toggleDropdown}>Select an option</button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            zIndex: 1,
          }}
        >
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter..."
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  color: 'black',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    'rgba(178, 175, 175, 0.418)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'white')
                }
                onClick={() => {
                  setFilter('');
                  setIsOpen(false);
                  setValue(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
