import commonStyles from '../template/common.module.css';
import headerStyles from './index.module.css';

import ViewAll from "./js/ViewAll";
import Background from "./js/Background";

const Header = () => (
    <div className={headerStyles.header}>
        <div className={headerStyles.hero}>
            <div className={`${commonStyles.bgMain} ${headerStyles.rank}`}>#1 Vietnam</div>
            <div className={headerStyles.title}>Professional Advertising <br/> Solutions</div>
            <div className={headerStyles.desc}>Increase your productivity by up to 60%</div>
            <ViewAll/>
        </div>
        <Background/>
    </div>
);

export default Header;