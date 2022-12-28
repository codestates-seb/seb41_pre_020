import styled from 'styled-components';

const InputContainer = styled.input`
  width: 100%;
  padding: 11.5px;
  padding-left: 32px;
  border: 1px solid #babfc4;
  border-radius: 3px;
  max-width: 316px;
  height: 100%;
  line-height: normal;
  font-stretch: 100%;
  color: #0c0d0e;

  &::placeholder {
    color: hsl(210, 8%, 75%);
  }

  &:focus {
    outline: none;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 3px #dae5f1;
  }
`;

const Input = (props) => {
    return <InputContainer {...props} />;
};

export default Input;