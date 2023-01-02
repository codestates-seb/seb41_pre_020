import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionItem from './QuestionItem';
import axios from 'axios';
import QuestionPagination from './QuestionPagination';

const Container = styled.div`
  width: auto;
  float: none;
  margin-bottom: 20px;
  margin-left: -24px;
  clear: both;
  border-top: 1px solid #d6d9dc;
`;

const QuestionList = ({ lists }) => {
  // const [info, setInfo] = useState({});
  // const getInfo = () => {
  //   axios
  //     .get('http://43.201.60.216:8080/questions?page=1&size=15&sort=votes')
  //     .then((res) => {
  //       setInfo(res.data.pageInfo);
  //       console.log(info);
  //     });
  // };
  // useEffect(() => {
  //   getInfo();
  // });
  // const [posts, setPost] = useState([]);

  // const getPost = () => {
  //   axios
  //     .get('http://43.201.60.216:8080/questions?page=1&size=15&sort=votes')
  //     .then((res) => {
  //       setPost(res.data.data);
  //       console.log(res.data);
  //     });
  // };

  // useEffect(() => {
  //   // getUser();
  //   getPost();
  //   // getCount();
  // }, []);

  // const [tags] = useState(info);
  // const [count, setCount] = useState(5);
  // const [page, setPage] = useState(1);
  // const [dataPerPage] = useState(5);

  // const [indexOfLastData, setIndexOfLastData] = useState(0);
  // const [indexOfFirstData, setIndexOfFirstData] = useState(0);
  // // const [currentData, setCurrentData] = useState();

  // const handlePageChange = (page) => {
  //   setPage(page);
  // };

  // useEffect(() => {
  //   setCount(info.totalElements);
  //   setIndexOfLastData(page * dataPerPage);
  //   setIndexOfFirstData(indexOfLastData - dataPerPage);
  //   // setCurrentData(tags.slice(indexOfFirstData, indexOfLastData));
  // }, [page, indexOfFirstData, indexOfLastData, tags, dataPerPage]);

  return (
    <>
      <Container>
        {lists.map((post, questionId) => {
          return <QuestionItem key={post.id} posts={post} />;
        })}
      </Container>
      {/* <QuestionPagination
        page={page}
        itemsCountPerPage={dataPerPage}
        totalItemsCount={count}
        onChange={handlePageChange}
      /> */}
    </>
  );
};

export default QuestionList;
