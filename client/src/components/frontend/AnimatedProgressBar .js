import React from 'react';
import '../css/frontend/ProgressBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
const AnimatedProgressBar  = ({ skill, value }) => {
  const calculateProgress = () => {
    return `${value}%`;
  };

  return (
    <div className="skill-progress-bar">
    <div className="skill-name">{skill}</div>
    <ProgressBar now={value} label={`${value}%`} animated striped />
  </div>
  );
};

export default AnimatedProgressBar ;
