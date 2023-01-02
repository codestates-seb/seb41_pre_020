import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: auto;
`;

const Tab = styled.div`
  padding: 8px;
  margin-left: 2px;
  color: #6a737c;
  border-bottom: 1px solid transparent;
  font-size: 12px;
  line-height: 23px;
  cursor: pointer;

  &.tab--clicked {
    border-color: rgb(244, 130, 37);
    font-weight: bold;
    color: #3b4045; 
  }

  &:hover {
    border-color: rgb(244, 130, 37);
  }
`;

const data = ['week', 'month', 'quarter', 'year', 'all'];

const UserSubTab = () => {
  const [isActive, setIsActive] = useState('');

  return (
    <Container>
      {data.map((tag, idx) => {
        return (
          <Tab key={idx} onClick={() => setIsActive(idx)} isClick={isActive === idx ? true : false} className={(isActive === idx || (idx === 0 && isActive === '')) && 'tab--clicked'}>
            {tag}
          </Tab>
        );
      })}
    </Container>
  );
};

export default UserSubTab;
