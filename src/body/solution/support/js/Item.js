import commonStyles from '../../../../template/common.module.css';
import buttonStyles from '../../../../template/button.module.css';
import itemsStyles from '../styles/Items.module.css';
import titleStyles from '../styles/Title.module.css';

const Item = ({image, title, desc}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <div className={`${itemsStyles.item} ${commonStyles.itemBox}`}>
            <img src={process.env.PUBLIC_URL + "/images/index/" + image + ".svg"} alt=""/>
            <div className={titleStyles.title}>{title}</div>
            <div className={titleStyles.desc}>{desc}</div>
            <button className={`${buttonStyles.buttonMain} ${itemsStyles.customizedButton}`} onClick={handleClick}>
                <span className={buttonStyles.arrow}>Try</span>
            </button>
        </div>
    );
}

export default Item;