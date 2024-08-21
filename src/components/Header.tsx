import Link from 'next/link';
import Logo from '../../public/mmfood.svg';
import styles from './Header.module.sass';

export default function Header() {
  /* Заменить все <a> на <Link /> */
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.link}>
        ABOUT
        <br />
        APP
      </Link>
      <Link href="/jam-session" className={styles.link}>
        JAM
        <br />
        SESSION
      </Link>
      <Logo />
      <Link href="/a-la-album" className={styles.link}>
        À LA
        <br />
        ALBUM
      </Link>
      <Link href="/a-la-carte" className={styles.link}>
        À LA
        <br />
        CARTE
      </Link>
    </header>
  );
}
