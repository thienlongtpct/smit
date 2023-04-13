import footerStyles from '../index.module.css';
import protectStyles from '../styles/Protect.module.css';

const Protect = () => (
    <div className={footerStyles.protect}>
        <div className={protectStyles.company}>© SMIT Technology Solutions Joint Stock Company</div>
        <div className={protectStyles.badge}>
            <a href={process.env.REACT_APP_LINK} title="DMCA.com Protection Status" className={protectStyles.dmcaBadge}>
                <img
                    src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=84e3c14f-61e8-4750-b3a5-d7ae91028878"
                    alt="DMCA.com Protection Status"/>
            </a>
            <div className={protectStyles.lang}>Tiếng Việt</div>
            <div className={`${protectStyles.lang} ${protectStyles.selected}`}>English</div>
        </div>
    </div>
)

export default Protect;