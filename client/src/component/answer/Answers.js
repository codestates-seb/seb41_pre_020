import styled from 'styled-components';
import AnswerItem from './AnswerItem';
/* eslint-disable react/prop-types */
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
const Container = styled.div`
  margin-bottom: 20px;
  h3 {
    font-weight: 400;
  }
  li {
    list-style: none;
  }
`;
