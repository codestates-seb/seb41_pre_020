import styled, { css } from 'styled-components';

const TabBlock = styled.button`
  border: 0;
  outline: 0;
  padding: 10.5px;
  text-align: center;
  background-color: transparent;
  color: #838c95;
  cursor: pointer;
  border-radius: ${({ radius }) => (radius ? radius : '0')};

  &:not(:last-child) {
    border-right: 1px solid #838c95;
  }

  &:hover {
    background: #f8f9f9;
  }

  ${(props) =>
    props.isClick &&
    css`
      background-color: #e3e6e8;
      color: #3b4045;

      &:hover {
        background: #e3e6e8;
      }
    `}
`;

const TabItem = ({ text, ...props }) => {
  return <TabBlock {...props}>{text}</TabBlock>;
};

export default TabItem;
