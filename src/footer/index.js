import navbarStyles from './index.module.css';
import commonStyles from '../template/common.module.css';

import Router from "./js/Router";

const AuthButton = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <button className={`${commonStyles.hover} ${commonStyles.bgMain} ${navbarStyles.login}`} onClick={handleClick}>
            Sign in
        </button>
    );
}

const Logo = () => (
    <a href={process.env.REACT_APP_LINK} className={navbarStyles.logo}>
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="SMIT logo"/>
    </a>
)

export default function Navbar() {
    return (
        <div className={navbarStyles.navbar}>
            <Logo/>
            <Router/>
            <AuthButton/>
        </div>
    )
}