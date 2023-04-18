import commonStyles from '../../../template/common.module.css';
import itemsStyles from '../styles/Items.module.css';

const Item = ({avatar, title, desc, desc2}) => (
    <div className={`${itemsStyles.item} ${commonStyles.itemBox}`}>
        <img className={itemsStyles.avatar} src={process.env.PUBLIC_URL + "/images/index/" + avatar + ".jpg"} alt=""/>
        <div className={itemsStyles.title}>{title}</div>
        <div className={itemsStyles.desc}>{desc}</div>
        <div className={itemsStyles.desc2}>{desc2}</div>
    </div>
)

export default Item;