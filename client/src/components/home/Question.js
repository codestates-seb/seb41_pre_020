import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  padding: 10px 20px;
`;

const WrapLeft = styled.div`
  flex-grow: 1;
  text-align: right;
  padding: 10px;
  flex-shrink: 0;
  > div {
    padding-bottom: 10px;
    color: gray;
  }
`;

const WrapRight = styled.div`
  flex-grow: 5;
  text-align: left;
  padding: 10px 20px;
  > div {
    padding-bottom: 5px;
  }
  > div.title {
    font-size: 1.2rem;
    color: #0a95ff;
    cursor: pointer;
  }
  > div.content {
    margin-bottom: 5px;
  }
`;
const WrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  > div.content-info > span {
    margin-left: 10px;
  }
`;

const Tag = styled.span`
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
    <Wrapper>
      <WrapLeft>
        <div>{item.recommend} votes</div>
        <div>0 answers</div>
        <div>3 views</div>
      </WrapLeft>
      <WrapRight>
        <div className='title' onClick={moveToTitle}>
          {item.title}
        </div>

        <div className='content'>{item.content}</div>
        <WrapBottom>
          <div>{item.tag ? <Tag>{item.tag}</Tag> : null}</div>
          <div className='content-info'>
            <span>{item.userId}</span>
            <span>time written {aaa}</span>
          </div>
        </WrapBottom>
      </WrapRight>
    </Wrapper>
  );
};

export default Question;
