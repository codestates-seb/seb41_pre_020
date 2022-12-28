import Tab from "../common/Tab";

const data = [
    {
        text: 'Reputation',
        radius: '3px 0 0 3px',
    },
    {
        text: 'New Users',
    },
    {
        text: 'Voters',
    },
    {
        text: 'Editors',
    },
    {
        text: 'Moderators',
        radius: '0 3px 3px 0',
    },
];

const UserTab = () => {
    return <Tab data={data} />;
};

export default UserTab;