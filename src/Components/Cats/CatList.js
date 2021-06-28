import React from 'react';

const CatList = (props) => {
  return (
    <div>
      <h2>List of Cat Breeds</h2>
      {props.cats.map(cat => <li>{cat}</li>)}
    </div>
  )
}

export default CatList;
