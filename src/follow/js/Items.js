import itemsStyles from '../styles/Items.module.css';

const Item = ({image, name}) => (
    <div className={itemsStyles.item}>
        <div className={itemsStyles.left}>
            <img src={process.env.PUBLIC_URL + "/images/index/" + image + ".svg"} alt=""/>
            <div className={itemsStyles.title}>{name}</div>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/index/arrow.svg"} alt=""/>
    </div>
)

const Items = () => {
    const items = [
        {
            image: 'follow-facebook',
            name: 'SMIT Community',
        },
        {

            image: 'follow-youtube',
            name: 'Official Youtube channel',
        },
        {

            image: 'follow-facebook',
            name: 'Official Fanpage',
        },
        {

            image: 'follow-support',
            name: 'Official Support channel',
        }
    ];

    return (
        <div>
            {items.map(({image, name}, id) => <Item key={id} image={image} name={name}/>)}
        </div>
    )
}

export default Items;