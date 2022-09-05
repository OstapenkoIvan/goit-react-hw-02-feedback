import React from 'react';
import s from './feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        className={s.statBtn}
        type="button"
        name={option}
        onClick={event => onLeaveFeedback(event)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default Feedback;
