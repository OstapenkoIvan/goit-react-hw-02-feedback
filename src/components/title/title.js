import React from 'react';
import s from './title.module.css';

export const Title = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
