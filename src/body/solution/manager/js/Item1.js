import commonStyles from '../../../template/common.module.css';
import itemsStyles from './styles/Items.module.css';
import item1Styles from './styles/Item1.module.css';

const Item1 = () => (
    <div className={`${item1Styles.item} ${commonStyles.itemBox}`}>
        <div className={itemsStyles.left}>
            <div className={itemsStyles.title}>Ads check by SMIT</div>
            <div className={itemsStyles.desc}>Ads account security and management extension</div>
            <div className={item1Styles.ul}>
                <div className={item1Styles.li}>
                    Remove hidden admin
                </div>
            </div>
            <div className={item1Styles.ul}>
                <div className={item1Styles.li}>
                    View payment information
                </div>
            </div>
            <div className={item1Styles.ul}>
                <div className={item1Styles.li}>
                    Share Ads Account's permissions
                </div>
            </div>
            <div className={item1Styles.ul}>
                <div className={item1Styles.li}>
                    Tracking Ads Account's information
                </div>
            </div>
            <div className={item1Styles.ul}>
                <div className={item1Styles.li}>
                    Change Ads Account's information
                </div>
            </div>
            <button className={commonStyles.buttonMain}>
                <span className={commonStyles.arrow}>Try it now</span>
            </button>
        </div>
        <div className={itemsStyles.right}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563 417" width="563" height="417"
                 preserveAspectRatio="xMidYMid meet"
                 style={{
                     width: "100%",
                     height: "100%",
                     transform: "translate3d(0px, 0px, 0px)",
                     contentVisibility: "visible"
                 }}>
                <defs>
                    <clipPath id="__lottie_element_137">
                        <rect width="563" height="417" x="0" y="0"/>
                    </clipPath>
                    <image xlinkHref="/json-images/index/table-2/img_0.png"/>
                    <image xlinkHref="/json-images/index/table-2/img_1.png"/>
                    <image xlinkHref="/json-images/index/table-2/img_2.png"/>
                    <image xlinkHref="/json-images/index/table-2/img_3.png"/>
                    <clipPath id="__lottie_element_145">
                        <path d="M0,0 L530,0 L530,244 L0,244z"/>
                    </clipPath>
                    <filter id="__lottie_element_147">
                        <feMorphology operator="erode" in="SourceGraphic" radius="0"/>
                    </filter>
                    <mask id="__lottie_element_146">
                        <path fill="#ffffff" clipRule="nonzero" stroke="#ffffff"
                              d=" M510,0 C510,0 20,0 20,0 C8.954000473022461,0 0,8.954000473022461 0,20 C0,20 0,224 0,224 C0,235.04600524902344 8.954000473022461,244 20,244 C20,244 510,244 510,244 C521.0460205078125,244 530,235.04600524902344 530,224 C530,224 530,20 530,20 C530,8.954000473022461 521.0460205078125,0 510,0"
                              fillOpacity="1" filter="null" strokeWidth="6"/>
                    </mask>
                </defs>
                <g clipPath="url(#__lottie_element_137)">
                    <g transform="matrix(1,0,0,1,-0.25,-0.25)" opacity="1" style={{display: "block"}}>
                        <image width="564px" height="418px" preserveAspectRatio="xMidYMid slice"
                               xlinkHref="/json-images/index/table-2/img_3.png"/>
                    </g>
                    <g clipPath="url(#__lottie_element_145)"
                       transform="matrix(1,0,0,1,18.256988525390625,108.3280029296875)" opacity="1"
                       style={{display: "block"}}>
                        <g mask="url(#__lottie_element_146)">
                            <g transform="matrix(1,0,0,1,30.473007202148438,-141.39598083496094)" opacity="1"
                               style={{display: "block"}}>
                                <image width="469px" height="707px" preserveAspectRatio="xMidYMid slice"
                                       xlinkHref="/json-images/index/table-2/img_2.png"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,18.756988525390625,108.3280029296875)" opacity="1"
                       style={{display: "block"}}>
                        <image width="530px" height="244px" preserveAspectRatio="xMidYMid slice"
                               xlinkHref="/json-images/index/table-2/img_1.png"/>
                    </g>
                    <g transform="matrix(1,0,0,1,18.50799560546875,108.0780029296875)" opacity="1"
                       style={{display: "block"}}>
                        <image width="531px" height="39px" preserveAspectRatio="xMidYMid slice"
                               xlinkHref="/json-images/index/table-2/img_0.png"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
)

export default Item1;