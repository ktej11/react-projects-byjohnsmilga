import React from 'react';

const Categories = ({ filterItems, allCatogories }) => {
  return (<>

    <div className="btn-container">


      {allCatogories.map((Category, index) => {
        return (
          <>
            <button className="filter-btn" key={index} onClick={() => {
              filterItems(Category)
            }}>{Category}</button>
          </>
        )
      })}
      {/* <button className="filter-btn" onClick={() => {
        filterItems('all')
      }}>All</button>
      <button className="filter-btn" onClick={() => {
        filterItems('breakfast')
      }}>breakfast</button>*/}
    </div>

  </>)
};

export default Categories;
