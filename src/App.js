import React, { useState } from 'react';
import Acoordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
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

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
