import PropTypes from 'prop-types';
import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
