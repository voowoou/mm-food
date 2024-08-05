import Logo from '../../public/mmfood.svg';
import style from './Header.module.sass'

export default function Header () {
    /* Заменить все <a> на <Link /> */
    return (
        <header className={style.container}>
            <a className={style.link}>ABOUT<br/>APP</a>
            <a className={style.link}>JAM<br/>SESSION</a>
            <Logo />
            <a className={style.link}>À LA<br/>ALBUM</a>
            <a className={style.link}>À LA<br/>CARTE</a>
        </header>
    )
}