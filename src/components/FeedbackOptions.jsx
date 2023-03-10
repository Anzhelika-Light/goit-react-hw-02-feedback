import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button
          key={nanoid()}
          type="button"
          className={css.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
