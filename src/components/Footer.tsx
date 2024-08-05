import GithubIcon from '../../public/github.svg';
import TelegramIcon from '../../public/telegram.svg';
import style from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.leftBlock}>
        <span>thank you for visiting</span>
        <div className={style.socialMedia}>
          <a href="https://github.com/voowoou" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://t.me/voowoou" target="_blank">
            <TelegramIcon />
          </a>
        </div>
      </div>
      <p className={style.rightBlock}>
        powered by{' '}
        <a href="https://spoonacular.com/food-api" target="_blank" className={style.link}>
          Spoonacular Food API
        </a>{' '}
        and
        <br />
        <a href="https://spoonacular.com/food-api" target="_blank" className={style.link}>
          Google Programmable Search Engine
        </a>
      </p>
    </footer>
  );
}
