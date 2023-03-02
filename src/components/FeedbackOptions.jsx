import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={css.feedbackOptions}>
        {this.props.options.map(option => (
          <button
            key={nanoid()}
            type="button"
            className={css.button}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
