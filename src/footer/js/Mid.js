import footerStyles from '../index.module.css';
import midStyles from '../styles/Mid.module.css';

const Item = ({title, descs}) => (
    <div>
        <div className={midStyles.title}>{title}</div>
        {descs.map((desc, id) => (
            <div key={id} className={midStyles.desc}>
                <a href={process.env.REACT_APP_LINK}>{desc}</a>
            </div>
        ))}
    </div>
)

const Mid = () => {
    const items = [
        {
            title: 'Solutions',
            descs: [
                'Ads check by SMIT',
                'Ads Manager',
                'Find Facebook ID',
                'SMIT Cookies',
                'SMIT Translator'
            ]
        },
        {
            title: 'Policy',
            descs: [
                'Cookie Policy',
                'Privacy Policy',
                'Terms of Service',
                'Disclaimer',
                'Affiliate Policy'
            ]
        },
        {
            title: 'Company',
            descs: [
                'Affiliate cooperation',
                'Contact us'
            ]
        },
        {
            title: 'Resources',
            descs: [
                'Blogs',
                'Community',
                'Help'
            ]
        },
    ]

    return (
        <div className={footerStyles.mid}>
            {items.map(({title, descs}, id) => <Item key={id} title={title} descs={descs}/>)}
        </div>
    );
}

export default Mid;