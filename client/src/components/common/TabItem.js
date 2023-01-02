import styled, { css } from 'styled-components';

const TabBlock = styled.button`
  border: 0;
  border-right: 1px solid hsl(210, 8%, 55%);
  padding: 9px;
  text-align: center;
  font-size: 12px;
  background-color: transparent;
  color: hsl(210, 8%, 25%);
  cursor: pointer;
  border-radius: ${({ radius }) => (radius ? radius : '0')};

  &:hover {
    background-color: hsl(210, 8%, 95%);
  }

  ${(props) =>
    props.isClick &&
    css`
      background-color: hsl(210, 8%, 90%);
    `}
`;

const TabItem = ({ text, ...props }) => {
    return <TabBlock {...props}>{text}</TabBlock>;
};

export default TabItem;