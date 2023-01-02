import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10px;

  margin: 10px;
  .arrow {
    font-size: 3rem;
    color: #babfc4;
    cursor: pointer;
  }
  span {
    color: #abb0b5;
    font-size: 20px;
  }
`;

// const PostVote = ({ votes, onIncreaseVote, onDecreaseVote }) => {
const PostVote = ({ votes }) => {
  // const state = useSelector((state) => state.signInReducer);
  // const [count, setCount] = useState(0);
  // const onPlus = () => {
  //   if (count === 0) {
  //     onIncreaseVote();
  //     setCount(count + 1); // +1
  //   } else if (count === 1) {
  //     return;
  //   } else if (count === -1) {
  //     onIncreaseVote();
  //     setCount(count + 1); // 0
  //   }
  // };
  // const onMinus = () => {
  //   if (count === 0) {
  //     onDecreaseVote();
  //     setCount(count - 1); // -1
  //   } else if (count === -1) {
  //     return;
  //   } else if (count === 1) {
  //     onDecreaseVote();
  //     setCount(count - 1); // 0
  //   }
  // };
  return (
    <Container>
      <FontAwesomeIcon
        icon={faCaretUp}
        // onClick={state.loginState ? onPlus : null}
        className='arrow'
      />
      <span>{votes}</span>
      <FontAwesomeIcon
        icon={faCaretDown}
        // onClick={state.loginState ? onMinus : null}
        className='arrow'
      />
    </Container>
  );
};
export default PostVote;
