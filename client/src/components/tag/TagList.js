import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TagItem from './TagItem';
import { tagData } from '../../mocks/Data';
import TagPagination from './TagPagination';

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
`;

const TagList = () => {
  const [tags] = useState(tagData);
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
    setCount(tags.length);
    setIndexOfLastData(page * dataPerPage);
    setIndexOfFirstData(indexOfLastData - dataPerPage);
    setCurrentData(tags.slice(indexOfFirstData, indexOfLastData));
  }, [page, indexOfFirstData, indexOfLastData, tags, dataPerPage]);

  return (
    <>
      <Container>
        <Grid>
          {currentData &&
            currentData.map((tag, idx) => {
              return <TagItem key={idx} tag={tag} />;
            })}
        </Grid>
      </Container>
      <TagPagination
        page={page}
        itemsCountPerPage={dataPerPage}
        totalItemsCount={count}
        onChange={handlePageChange}
      />
    </>
  );
};

export default TagList;
