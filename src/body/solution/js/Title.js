import commonStyles from '../../../template/common.module.css';
import solutionStyles from '../index.module.css';

const Title = ({children}) => (
    <div className={`${solutionStyles.title} ${commonStyles.fontSpace}`}>
        {children}
    </div>
)

export default Title;