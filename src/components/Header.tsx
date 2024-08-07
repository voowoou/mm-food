import Logo from '../../public/mmfood.svg';
import styles from './Header.module.sass';

export default function Header() {
  /* Заменить все <a> на <Link /> */
  return (
    <header className={styles.container}>
      <a className={styles.link}>
        ABOUT
        <br />
        APP
      </a>
      <a className={styles.link}>
        JAM
        <br />
        SESSION
      </a>
      <Logo />
      <a className={styles.link}>
        À LA
        <br />
        ALBUM
      </a>
      <a className={styles.link}>
        À LA
        <br />
        CARTE
      </a>
    </header>
  );
}
