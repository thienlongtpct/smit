import followStyles from './index.module.css';

import Items from "./js/Items";

const Why = () => (
    <div className={followStyles.follow}>
        <div className={followStyles.in}>
            <div className={followStyles.title}>
                Follow us
            </div>
            <div className={followStyles.desc}>
                Join the Facebook community for sharing local expertise and connect with more than 40,000 other users.
            </div>
            <Items/>
        </div>
    </div>
)

export default Why;