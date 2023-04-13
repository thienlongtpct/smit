import commonStyles from '../../../template/common.module.css';
import topStyles from '../styles/Top.module.css';

const TitleSpace = () => (
    <div className={commonStyles.titleSpace}>
        Why should advertisers use SMIT's suite of solutions?
    </div>
);

const Right = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <div className={topStyles.right} onClick={handleClick}>
            Learn more about SMIT&nbsp;
            <img src={process.env.PUBLIC_URL + "/images/index/arrow.svg"} alt="arrow"/>
        </div>
    );
};

const Top = () => (
    <div className={topStyles.top}>
        <TitleSpace/>
        <Right/>
    </div>
)

export default Top;