import Tab from "../common/Tab";

const data = [
    {
        text: 'Popular',
        radius: '3px 0 0 3px',
    },
    {
        text: 'Name',
    },
    {
        text: 'New',
        radius: '0 3px 3px 0',
    },
];

const TagTab = () => {
    return <Tab data={data} />;
};

export default TagTab;