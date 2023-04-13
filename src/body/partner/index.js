import partnerStyles from './index.module.css';

import Logos from "./js/Logos";

const Partner = () => (
    <div>
        <div className={partnerStyles.title}>Partners of SMIT</div>
        <div className={partnerStyles.desc}>Become one of our partners to gain access to a universe of fresh
            possibilities.
        </div>
        <Logos/>
    </div>
)

export default Partner;