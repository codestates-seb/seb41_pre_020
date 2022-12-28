import { useState, useEffect } from 'react';
import styled from 'styled-components';

import UserItem from './UserItem';
import { usersData } from '../../mocks/Data';
import TagPagination from '../tag/TagPagination';

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
`;

const Pagination = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const UserList = () => {
  const [users] = useState(usersData);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [dataPerPage] = useState(16);

  const [indexOfLastData, setIndexOfLastData] = useState(0);
  const [indexOfFirstData, setIndexOfFirstData] = useState(0);
  const [currentData, setCurrentData] = useState();

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setCount(users.length);
    setIndexOfLastData(page * dataPerPage);
    setIndexOfFirstData(indexOfLastData - dataPerPage);
    setCurrentData(users.slice(indexOfFirstData, indexOfLastData));
  }, [page, indexOfFirstData, indexOfLastData, users, dataPerPage]);

  return (
    <>
      <Container>
        <Grid>
          {currentData &&
            currentData.map((user, idx) => {
              return <UserItem key={idx} user={user} />;
            })}
        </Grid>
      </Container>
      <TagPagination
        page={page}
        itemsCountPerPage={dataPerPage}
        totalItemsCount={count}
        onChange={handlePageChange}
      />
      <Pagination></Pagination>
    </>
  );
};

export default UserList;
