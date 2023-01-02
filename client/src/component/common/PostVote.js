import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Container = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
  margin: -2px;

  .vote-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & span {
      color: #6a737c;
    }
  }

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
      <div className="vote-container">
        <svg
          xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="36"
          height="36"
          viewBox="0 0 36 36"
        >
          <path d="M2 25h32L18 9 2 25Z" fill="#BABFC4"></path>
        </svg>
        <span>{votes}</span>
        <svg
          xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="36"
          height="36"
          viewBox="0 0 36 36"
        >
          <path d="M2 11h32L18 27 2 11Z" fill="#BABFC4"></path>
        </svg>
      </div>
    </Container>
  );
};
export default PostVote;
