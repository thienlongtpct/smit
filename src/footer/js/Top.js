import footerStyles from '../index.module.css';
import topStyles from '../styles/Top.module.css';

const Top = () => (
    <div className={footerStyles.top}>
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} width={70} alt=""/>
        <div className={topStyles.image}>
            <img src={process.env.PUBLIC_URL + "/images/footer/footer-in.svg"} alt=""/>
            <img src={process.env.PUBLIC_URL + "/images/footer/footer-tiktok.svg"} alt=""/>
            <img src={process.env.PUBLIC_URL + "/images/footer/footer-youtube.svg"} alt=""/>
            <img src={process.env.PUBLIC_URL + "/images/footer/footer-facebook.svg"} alt=""/>
        </div>
    </div>
)

export default Top;