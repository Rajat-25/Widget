import React, { useState } from 'react';
import Acoordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
const App = () => {
  const items = [
    {
      title: 'What is React',
      content: 'React is a front end javascript framework.',
    },
    {
      title: 'Why use React',
      content: 'React is a favourite js library among engineers',
    },
    {
      title: 'How do you use React',
      content: 'You use react for creating component.',
    },
  ];

  const options = [
    { label: 'The Color Red', value: 'red' },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
