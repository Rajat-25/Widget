import React from 'react';
import Acoordion from './components/Accordion'; 
import Search from './components/Search'
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
  return (
    <div>
     <Acoordion items={items}/>
    </div>
  );
};

export default App;
