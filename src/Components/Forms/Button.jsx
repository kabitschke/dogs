import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  //children pega o que está dentro da tag <Button>Children</Button>
  //...Props demais propriedades que podemos passar ao component
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
