import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionItem from './QuestionItem';

const Container = styled.div`
  width: auto; 
  float: none; 
  margin-bottom: 20px; 
  margin-left: -24px;
  clear: both; 
  border-top: 1px solid #d6d9dc;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px 10px;
`;

const PageBtnFirst = styled.span`
  background-color: hsl(27, 90%, 55%);
  color: white;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 10px;
  border: 1px;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
`;

const PageBtnOth = styled.span`
  background-color: transparent;
  border: 1px solid black;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 10px;
  border: 1px;
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;

const QuestionList = ({ setUserInfo }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  const getNum = (e) => {
    setPageNum(Number(e.target.textContent));
  };

  return (
    <Container>
      <QuestionItem
        pageNum={pageNum}
        setPageArr={setPageArr}
        setUserInfo={setUserInfo}
      ></QuestionItem>
      {pageArr.length !== 0 ? (
        <Wrapper>
          {' '}
          {pageArr.map((num, i) => {
            return (
              <div key={i}>
                {pageNum === num ? (
                  <PageBtnFirst onClick={getNum}>{num}</PageBtnFirst>
                ) : (
                  <PageBtnOth onClick={getNum}>{num}</PageBtnOth>
                )}
              </div>
            );
          })}
        </Wrapper>
      ) : null}
    </Container>
  );
};

export default QuestionList;
