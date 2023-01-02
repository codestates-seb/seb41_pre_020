import styled from 'styled-components';
import AnswerItem from './AnswerItem';
/* eslint-disable react/prop-types */

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
  float: none;
  clear: both;
  width: auto;

  & h3 {
    font-size: 19px;
    line-height: 25px;
  }
`;

const Answers = ({ answerList, count, getAnswerAnswer }) => {
  // const getAnswerAnswerAnswer = () => {
  //   getAnswerAnswer();
  // };

  return (
    <Container>
      <h3>{count} Answers</h3>
      {/* {answerList.map((el, idx) => (
        <li key={idx}>
          <AnswerItem data={el} getAnswerAnswerAnswer={getAnswerAnswerAnswer} />
        </li>
      ))} */}
      {answerList.map((answer) => {
        return <AnswerItem key={answer.id} answer={answer} />;
        // <div>{answer.content}</div>;
      })}
    </Container>
  );
};

export default Answers;
