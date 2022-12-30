import Pagination from 'react-js-pagination';

import styled from 'styled-components';

const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    width: 25px;
    height: 25px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    padding: 0 8px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: hsl(210, 8%, 25%);
    font-size: 13px;
    margin: 0 2px;
    padding: 0 8px;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: hsl(27, 90%, 55%);
    pointer-events: none;
  }

  ul.pagination li:hover {
    background-color: hsl(210, 8%, 90%);
  }

  ul.pagination li:first-child {
    width: 45px;
  }

  ul.pagination li:last-child {
    width: 45px;
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