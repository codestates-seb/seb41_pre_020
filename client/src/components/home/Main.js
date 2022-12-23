import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionList from './QuestionList';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  > span.question-title {
    font-size: 1.8rem;
  }
  &:first-child {
    padding-top: 26px;
  }
`;

const Button = styled.button`
  background-color: white;
  color: black;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: 1px;
  border-radius: 3px;
  padding: 10.4px;
  cursor: pointer;
`;

const AskButton = styled(Button)`
  background-color: #0a95ff;
  color: white;
  &:hover {
    background: #0074cc;
  }
`;

const SortButton = styled(Button)`
  background-color: #f8f9f9;
  color: black;
  border: 1px solid lightgray;
  &:hover {
    background: #e3e6e8;
  }
`;

const Main = () => {
  const [totalNum, setTotalNum] = useState(0);

  fetch(`${process.env.REACT_APP_SERVER}/questions`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setTotalNum(data.pageInfo.totalElements);
    });

  return (
    <>
      <Wrapper>
        <span className='question-title'>All Questions</span>
        <div>
          <Link to='/create'>
            <AskButton>Ask Question</AskButton>
          </Link>
        </div>
      </Wrapper>
      <Wrapper>
        <span>{totalNum} questions</span>
        <div>
          <SortButton>Newest</SortButton>
          <SortButton>Vote</SortButton>
        </div>
      </Wrapper>
      <QuestionList />
    </>
  );
};

export default Main;
