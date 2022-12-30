import React, { useEffect, useState } from 'react';
import EmptyPage from './EmptyPage';
import Question from './Question';

const QuestionItem = ({ pageNum, setPageArr, setUserInfo }) => {
  const [question, setQuestion] = useState([]);

  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    setQuestion(data.data);
    let arr = [];
    for (let i = 1; i <= data.pageInfo.totalPages; i++) {
      arr.push(i);
    }
    setPageArr(arr);
    setUserInfo({});
  };

  useEffect(() => {
    getData(
      `${process.env.REACT_APP_SERVER}/questions?page=${Number(pageNum)}&size=3`
    );
  }, [pageNum]);

  return (
    <>
      {question.length !== 0 ? (
        question.map((item) => <Question item={item} key={item.questionId} />)
      ) : (
        <EmptyPage />
      )}
    </>
  );
};

export default QuestionItem;
