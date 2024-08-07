import GithubIcon from '../../public/github.svg';
import TelegramIcon from '../../public/telegram.svg';
import styles from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.leftBlock}>
        <span>thank you for visiting</span>
        <div className={styles.socialMedia}>
          <a href="https://github.com/voowoou" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://t.me/voowoou" target="_blank">
            <TelegramIcon />
          </a>
        </div>
      </div>
      <p className={styles.rightBlock}>
        powered by{' '}
        <a href="https://spoonacular.com/food-api" target="_blank" className={styles.link}>
          Spoonacular Food API
        </a>{' '}
        and
        <br />
        <a href="https://spoonacular.com/food-api" target="_blank" className={styles.link}>
          Google Programmable Search Engine
        </a>
      </p>
    </footer>
  );
}
