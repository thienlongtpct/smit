import commonStyles from '../../template/common.module.css';
import buttonStyles from '../../template/button.module.css';
import installStyles from './index.module.css';

const Install = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <div className={installStyles.install}>
            <div className={installStyles.in}>
                <div className={`${installStyles.title} ${commonStyles.fontSpace}`}>
                    With over 30,000+ installs & daily usage
                </div>
                <div className={installStyles.desc}>
                    Register an account and join now to optimize ads
                </div>
                <div className={installStyles.input}>
                    <input placeholder="Fill in your email address..." type="text"/>
                    <button className={buttonStyles.buttonMain} onClick={handleClick}>
                        <span>Sign up</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Install;