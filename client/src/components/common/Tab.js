import { useState } from 'react';

import TabItem from './TabItem';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  border-top: 1px solid hsl(210, 8%, 55%);
  border-left: 1px solid hsl(210, 8%, 55%);
  border-bottom: 1px solid hsl(210, 8%, 55%);
  border-radius: 3px;
`;

const Tab = ({ data, onTab }) => {
    const [isActive, setIsActive] = useState('');

    return (
        <TabContainer>
            {data.map((tab, idx) => (
                <TabItem
                    key={idx}
                    text={tab.text}
                    radius={tab.radius}
                    onClick={(e) => {
                        setIsActive(idx);
                        onTab(e.target.textContent);
                    }}
                    isClick={isActive === idx ? true : false}
                />
            ))}
        </TabContainer>
    );
};

export default Tab;