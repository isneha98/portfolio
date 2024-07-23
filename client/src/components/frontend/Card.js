import React from 'react'
import '../css/frontend/Card.css';
const Card = (props) => {
  const { title, info } = props;

  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{info}</p>
      </div>
    </div>
  )
};
  
export default Card;