import routerStyles from '../styles/Router.module.css';

import NavButton from "./NavButton";
import ExtendedNavButton from "./ExtendedNavButton";

const Router = () => (
    <div className={routerStyles.router}>
        <NavButton link={"/"}>
            <p className={routerStyles.homepage}>
                Homepage
            </p>
        </NavButton>

        <ExtendedNavButton/>

        <NavButton link={process.env.REACT_APP_LINK}>About us</NavButton>
        <NavButton link={process.env.REACT_APP_LINK}>Guide</NavButton>
        <NavButton link={process.env.REACT_APP_LINK}>Support</NavButton>
    </div>
)

export default Router;