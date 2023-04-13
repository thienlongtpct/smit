import templateStyles from '../../template/hr.module.css';

import Top from "./js/Top";
import Items from "./js/Items";

const Why = () => (
    <div>
        <Top/>
        <div className={templateStyles.hr1}/>
        <Items/>
    </div>
)

export default Why;