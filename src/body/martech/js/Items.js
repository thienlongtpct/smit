import itemsStyles from '../styles/Items.module.css';

import Item from "./Item";

const Items = () => {
    const items = [
        {
            avatar: "martech-avatar-1",
            title: "Micheal Arteta",
            desc: "Head of SSA Entertaiment Department",
            desc2: "In the community of Facebook Ads advertisers, SMIT always shows us the enthusiasm and professionalism in each service or product that SMIT is providing. Through these things, we I understand that, SMIT has and is having a young, enthusiastic and passionate staff in the field of software engineering."
        },
        {
            avatar: "martech-avatar-2",
            title: "Philipo Inzzagi",
            desc: "Co-founder Smit company",
            desc2: "After a period of experience with Ads Check by SMIT, I confirm that this is a superior tool trusted and trusted by advertisers. Whether individuals or businesses should choose products because comprehensive support to run effective ads. You can easily build smarter Ads campaigns with outstanding functions!"
        },
        {
            avatar: "martech-avatar-3",
            title: "Micheal Jordan",
            desc: "Founder Smit Agency",
            desc2: "Since using Ads Check by SMIT, I have noticed a clear effect when checking all information simply, quickly and easily. Ad accounts are also protected. and give the cause of disabling the display completely free of charge."
        }
    ];

    return (
        <div className={itemsStyles.items}>
            {items.map(({avatar, title, desc, desc2}, id) => <Item key={id} avatar={avatar} title={title} desc={desc}
                                                                   desc2={desc2}/>)}
        </div>
    )
}

export default Items;