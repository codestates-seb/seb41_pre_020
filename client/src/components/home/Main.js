import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionList from './QuestionList';
import SidebarRight from '../aside/SidebarRight';

const Content = styled.div`
  max-width: 1100px;
  /* margin: 0 auto; */
  /* width: 100%; */
  height: 100% !important;
  width: calc(100% - 164px);
  background-color: white;
  border-left: 1px solid #d6d9dc;
  padding: 24px;
`;

const Mainbar = styled.div`
  //width: 100%;
  //width: calc(100% - 300px - 24px);
  float: left;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;

  & .question-title {
    font-size: 27px;
    color: #232629;
    margin-bottom: 12px;
    margin-right: 12px;
    line-height: 35px;
    flex: 1 auto !important;
  }

  & h3 {
    font-size: 17px;
    margin-right: 12px;
    flex: 1 auto !important;
    line-height: 22px;
  }

  & .filter {
    display: flex;
    flex-flow: row nowrap !important;
    margin-bottom: 1px;
    border: 1px solid #838C95;
    border-radius: 3px;
  }
`;

const AskButton = styled.div`
  margin-bottom: 12px;
  padding: 10.5px;
  border-radius: 3px;
  border: 1px solid #0a95ff;
  background: #0a95ff;
  color: white;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);

  &:hover {
    background: #0074cc;
    border-color: #0074cc;
  }
`;

const SortButton = styled.div`
  color: #838C95;
  padding: 9.5px;

  &:first-child {
    border-right: 1px solid #838C95;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:hover {
    background: #f8f9f9;
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
        <Content id="content">
            <Mainbar id="mainbar">
                <Wrapper>
                    <span className="question-title">All Questions</span>
                    <Link to="/create">
                        <AskButton>Ask Question</AskButton>
                    </Link>
                </Wrapper>
                <Wrapper className='ai-center jc-space-between'>
                    <h3>{totalNum} questions</h3>
                    <div className='filter'>
                        <SortButton>Newest</SortButton>
                        <SortButton>Vote</SortButton>
                    </div>
                </Wrapper>
                <QuestionList />
            </Mainbar>
            <SidebarRight />
        </Content>
    );
};

export default Main;