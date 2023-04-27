import Container from 'components/Container';

import styles from './HomeHeader.module.scss';

const HomeHeader = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>{children}</div>
    </header>
  );
};

export default HomeHeader;
