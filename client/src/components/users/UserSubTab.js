import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: auto;
`;

const Tab = styled.div`
  padding: 8px;
  margin-left: 2px;
  color: hsl(210, 8%, 45%);
  border-bottom: 1px solid
    ${({ isClick }) => (isClick ? 'rgb(244, 130, 37)' : 'transparent')};
  font-size: 12px;
  line-height: 23px;
  transition: all 150ms cubic-bezier(0.19, 1, 0.22, 1);
  font-weight: ${({ isClick }) => (isClick ? '700' : '400')};
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid rgb(244, 130, 37);
  }
`;

const data = ['week', 'month', 'quarter', 'year', 'all'];

const UserSubTab = () => {
    const [isActive, setIsActive] = useState('');

    return (
        <Container>
            {data.map((tag, idx) => {
                return (
                    <Tab
                        key={idx}
                        onClick={() => setIsActive(idx)}
                        isClick={isActive === idx ? true : false}
                    >
                        {tag}
                    </Tab>
                );
            })}
        </Container>
    );
};

export default UserSubTab;