import logoStyles from '../styles/Logo.module.css';

const Logo = ({image}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <div className={logoStyles.logo} onClick={handleClick}>
            <img src={process.env.PUBLIC_URL + "/images/index/" + image + ".png"} alt=""/>
        </div>
    );
}

const Logos = () => {
    const items = [
        "partner-dcg",
        "partner-smax",
        "partner-dc3",
        "partner-megad"
    ];

    return (
        <div className={logoStyles.logos}>
            {items.map((image, id) => <Logo key={id} image={image}/>)}
        </div>
    )
}

export default Logos;