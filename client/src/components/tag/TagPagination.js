import Pagination from 'react-js-pagination';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  float: right;
  margin: 20px 0;

  .pagination {
    display: flex;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    padding: 0 8px;
    height: 25px;
    border: 1px solid #d6d9dc;
    border-radius: 3px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #3b4045;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: rgb(244, 130, 37);
    cursor: default;
    pointer-events: none;
  }

  ul.pagination li:hover {
    background-color: #d6d9dc;
    border-color: #babfc4;
  }
`;

const TagPagination = ({ page, itemsCountPerPage, totalItemsCount, onChange }) => {
  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={6}
        hideFirstLastPages={true}
        prevPageText="Prev"
        nextPageText="Next"
        onChange={onChange}
      />
    </Container>
  );
};

export default TagPagination;
