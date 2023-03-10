import PropTypes from 'prop-types';
import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.notification}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
