import styles from './index.module.css';

import NavButton from "./NavButton";

const Router = () => {
    return (
        <div className={styles.router}>
            <NavButton link={"/"}>
                <p  className={styles.homepage}>
                    Homepage
                </p>
            </NavButton>
            <NavButton link={process.env.REACT_APP_LINK}>Solutions</NavButton>
            <NavButton link={process.env.REACT_APP_LINK}>About us</NavButton>
            <NavButton link={process.env.REACT_APP_LINK}>Guide</NavButton>
            <NavButton link={process.env.REACT_APP_LINK}>Support</NavButton>
        </div>
    )
}

export default Router;