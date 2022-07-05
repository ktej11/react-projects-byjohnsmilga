import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCatogories = ['all', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [Catogories, setCatogories] = useState(allCatogories);


  const filterItems = (category) => {
    if (category === 'all') {
      setmenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setmenuItems(newItems)
  }


  return (<>
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterItems={filterItems} allCatogories={allCatogories} />
      <Menu items={menuItems} />
    </main>
  </>
  )
}

export default App;
