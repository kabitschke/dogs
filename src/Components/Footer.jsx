import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  let data = new Date();

  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>&copy; Dogs Alguns direitos reservados {data.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
