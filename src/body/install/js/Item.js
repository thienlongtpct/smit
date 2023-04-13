import commonStyles from '../../../../template/common.module.css';
import buttonStyles from '../../../../template/button.module.css';
import supportStyles from '../index.module.css';

const Item = ({image, title, desc}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <div className={`${supportStyles.item} ${commonStyles.itemBox}`}>
            <img src={process.env.PUBLIC_URL + "/images/index/" + image + ".svg"} alt=""/>
            <div className={supportStyles.title}>{title}</div>
            <div className={supportStyles.desc}>{desc}</div>
            <button className={buttonStyles.buttonMain} onClick={handleClick}>
                <span className={buttonStyles.arrow}>Try</span>
            </button>
        </div>
    );
}

export default Item;