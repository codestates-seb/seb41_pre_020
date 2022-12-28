import styled from 'styled-components';
import Input from '../common/Input';
import React from 'react';

const Container = styled.div`
  position: relative;

  .searchIcon {
    position: absolute;
    top: 50%;
    right: auto;
    left: 0.7em;
    margin-top: -9px;
    color: #838c95;
  }
`;

const UserFilter = () => {
  return (
    <Container>
      <Input placeholder="Filter by user" />
      <div className="searchIcon">
        <svg
          xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="input-icon__search"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
            fill="#838c95"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default UserFilter;
