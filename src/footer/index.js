import footerStyles from './index.module.css';

import Top from "./js/Top";
import Protect from "./js/Protect";
import Info from "./js/Info";
import Mid from "./js/Mid";

const Footer = () => (
    <div className={footerStyles.footer}>
        <Top/>
        <Mid/>
        <Protect/>
        <Info/>
    </div>
)

export default Footer;