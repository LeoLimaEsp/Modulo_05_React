import React from 'react';
import '../index.css'
const Item = ({title, url, id}) => {
  return (
  <div className="card">
    <img className='imgs' src={url} alt={title}/>
    <p>{title}</p>
  </div>
  );
}

export default Item