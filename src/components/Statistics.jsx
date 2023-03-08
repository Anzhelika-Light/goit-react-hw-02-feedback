import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <p className={css.statsData}>
        <span className={css.statsData__label}>Good:</span> {good}
      </p>
      <p className={css.statsData}>
        <span className={css.statsData__label}>Neutral:</span>
        {neutral}
      </p>
      <p className={css.statsData}>
        <span className={css.statsData__label}>Bad:</span> {bad}
      </p>
      <p className={css.statsData}>
        <span className={css.statsData__label}>Total:</span> {total}
      </p>
      <p className={css.statsData}>
        <span className={css.statsData__label}>Positive feedback:</span>
        {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
