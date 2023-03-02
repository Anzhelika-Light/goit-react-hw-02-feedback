import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className={css.statistics}>
        <p className={css.statsData}>
          <span className={css.statsData__label}>Good:</span> {this.props.good}
        </p>
        <p className={css.statsData}>
          <span className={css.statsData__label}>Neutral:</span>{' '}
          {this.props.neutral}
        </p>
        <p className={css.statsData}>
          <span className={css.statsData__label}>Bad:</span> {this.props.bad}
        </p>
        <p className={css.statsData}>
          <span className={css.statsData__label}>Total:</span>{' '}
          {this.props.total}
        </p>
        <p className={css.statsData}>
          <span className={css.statsData__label}>Positive feedback:</span>{' '}
          {this.props.positivePercentage}%
        </p>
      </div>
    );
  }
}

export default Statistics;
