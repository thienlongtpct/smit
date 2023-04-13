import commonStyles from '../../../template/common.module.css';
import itemsStyles from './styles/Items.module.css';
import item2Styles from './styles/Item2.module.css';

const Item2 = () => (
    <div className={`${item2Styles.item} ${commonStyles.itemBox}`}>
        <div className={itemsStyles.left}>
            <div className={itemsStyles.title}>Ads Manager</div>
            <div className={itemsStyles.desc}>Manage advertising campaigns</div>
            <div className={item2Styles.note}>This tool is under development, please wait</div>
            <button disabled className={`${commonStyles.buttonMain} ${item2Styles.customizedButton}`}>
                Coming Soon ...
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
                    <clipPath id="__lottie_element_156">
                        <rect width="563" height="417" x="0" y="0"/>
                    </clipPath>
                    <image xlinkHref="/json-images/index/table-1/img_0.png"/>
                    <image xlinkHref="/json-images/index/table-1/img_1.png"/>
                    <image xlinkHref="/json-images/index/table-1/img_2.png"/>
                    <clipPath id="__lottie_element_161">
                        <path d="M0,0 L531,0 L531,342 L0,342z"/>
                    </clipPath>
                    <clipPath id="__lottie_element_162">
                        <path fill="#ffffff" clipRule="nonzero"
                              d=" M511,0 C511,0 20,0 20,0 C8.954000473022461,0 0,8.954000473022461 0,20 C0,20 0,322 0,322 C0,333.0459899902344 8.954000473022461,342 20,342 C20,342 511,342 511,342 C522.0460205078125,342 531,333.0459899902344 531,322 C531,322 531,20 531,20 C531,8.954000473022461 522.0460205078125,0 511,0"
                              fillOpacity="1"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_156)">
                    <g transform="matrix(1,0,0,1,-0.25,-0.25)" opacity="1" style={{display: "block"}}>
                        <image width="564px" height="418px" preserveAspectRatio="xMidYMid slice"
                               xlinkHref="/json-images/index/table-1/img_2.png"/>
                    </g>
                    <g clipPath="url(#__lottie_element_161)"
                       transform="matrix(1,0,0,1,17.2969970703125,59.91700744628906)" opacity="1"
                       style={{display: "block"}}>
                        <g clipPath="url(#__lottie_element_162)">
                            <g transform="matrix(1,0,0,1,23.5,-97.13140869140625)" opacity="1"
                               style={{display: "block"}}>
                                <image width="473px" height="955px" preserveAspectRatio="xMidYMid slice"
                                       xlinkHref="/json-images/index/table-1/img_1.png"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,17.2969970703125,59.91700744628906)" opacity="1"
                       style={{display: "block"}}>
                        <image width="531px" height="342px" preserveAspectRatio="xMidYMid slice"
                               xlinkHref="/json-images/index/table-1/img_0.png"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
)

export default Item2;