import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 16px;
  border-bottom: 1px solid #d6d9dc;
`;

const QuestionInfoContainer = styled.div`
  display: flex;
  width: 108px;
  margin-right: 16px;
  margin-bottom: 4px;
  gap: 6px;
  flex-direction: column;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: flex-end;
  color: #6a737c;

  & .question-info--emphasized {
    color: #0c0d0e;
  }

  & > div {
    display: inline-flex;
    gap: 0.3em;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
`;

const QuestionContainer = styled.div`
  flex-grow: 1;
  max-width: 100%;

  & h3 {
    margin-top: -0.15em;
    margin-bottom: 5px;
    padding-right: 24px;
    font-size: 17px;
    line-height: 22px;

    & a {
      /* color: #0074cc; */
      word-break: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      cursor: pointer;
    }
  }

  & div.content {
    margin-top: -2px;
    margin-bottom: 8px;
    color: #3b4045;
    overflow: hidden;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;

const QuestionSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 8px;

  & .question-summary--tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  & .question-summary--user-info {
    display: flex;
    gap: 4px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;

    & .question-summary__user-info--name {
      color: #0074cc;
    }
  }
`;

const QuestionTag = styled.span`
  margin-right: 5px;
  padding: 5px;
  background-color: hsl(205, 46%, 92%);
  border-radius: 5px;
  text-align: middle;
  color: hsl(205, 47%, 42%);
  cursor: pointer;

  &:hover {
    background: #b3d3ea;
  }
`;

const Question = ({ item }) => {
  const navigate = useNavigate();
  const moveToTitle = () => {
    navigate(`/questions/${item.questionId}`);
    console.log(item.editDate);
  };
  const aaa = item.editDate.slice(0, 10);

  // const date = new Date();
  // const year = date.getFullYear();
  // const month = ('0' + (date.getMonth() + 1)).slice(-2);
  // const day = ('0' + date.getDate()).slice(-2);
  // const dateStr = year + '/' + month + '/' + day;

  return (
    <Container>
      <QuestionInfoContainer>
        <div className="question-info--emphasized">
          <span>{item.recommend}</span>
          <span>votes</span>
        </div>
        <div>
          {/* <span>{item.answer}</span> */}
          <span>answers</span>
        </div>
        <div>
          {/* <span>{item.view}</span> */}
          <span>views</span>
        </div>
      </QuestionInfoContainer>

      <QuestionContainer>
        <h3 className="title" onClick={moveToTitle}>
          {/* 제목을 누르면 질문으로 가야한다 */}
          <a href="#!">{item.title}</a>
        </h3>

        <div className="content">{item.content}</div>
        <QuestionSummary>
          <div className="question-summary--tags">
            {item.tag ? <QuestionTag>{item.tag}</QuestionTag> : null}
          </div>
          <div className="question-summary--user-info">
            <span className="question-summary__user-info--name">{item.userId}</span>
            <span>time written {aaa}</span>
          </div>
        </QuestionSummary>
      </QuestionContainer>
    </Container>
  );
};

export default Question;
