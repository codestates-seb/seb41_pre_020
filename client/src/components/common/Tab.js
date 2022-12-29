import { useState } from 'react';

import TabItem from './TabItem';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #838c95;
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
