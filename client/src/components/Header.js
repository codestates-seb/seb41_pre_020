import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
  display: flex;
  position: fixed !important;
  min-width: auto;
  top: 0;
  width: 100%;
  height: 50px;
  background: #f8f9f9;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-top: 3px solid #f48224;
  align-items: center;
  z-index: 100000;
`;

const Nav = styled.nav`
  display: flex;
  width: 97.2307692rem;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`;

const Logo = styled.a`
  padding: 0 8px;
  height: 100%;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    background-image: url('https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27');
    width: 150px;
    height: 30px;
    margin-top: -4px;
    background-position: 0 -500px;
  }
`;

const NavtoPages = styled.ol`
  display: flex;
  padding: 2px 0;
  gap: 4px;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  border: none;

  & li {
    padding: 6.5px 0;

    & a {
      padding: 6.5px 12px;
      color: rgb(82, 89, 96);
      background-color: transparent;
      border-radius: 1000px;

      &:hover {
        color: rgb(35, 38, 41);
        background-color: rgb(227, 230, 232);
      }

      &.is-selected {
        background: rgb(244, 130, 37);
        color: white;

        &:hover {
          background: rgb(218, 104, 11);
        }
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  padding: 0 8px;
  align-items: center;
  flex-shrink: 10000;
  flex-grow: 1;

  & .top--searchbar {
    position: relative;
    flex-grow: 1;

    & .input-icon__search {
      position: absolute;
      top: 50%;
      right: auto;
      left: 0.7em;
      margin-top: -9px;
      color: #838c95;
    }
  }
`;

const Input = styled.input`
  display: block;
  border: 1px solid #babfc4;
  background-color: white;
  color: #3b4045;
  line-height: 15px;
  padding: 7.8px 9px 7.8px 32px;
  border-radius: 3px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 3px #dae5f1;
  }
`;

const NavIconContent = styled.nav`
  padding-right: 12px;
  margin-left: auto;

  & ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: auto;

    & li {
      display: inline-flex;

      a {
        line-height: 15px;
        padding: 8px 10.5px;
        border-radius: 3px;
      }

      & .login-button {
        border: 1px solid #7aa7c7;
        background: #e1ecf4;
        color: #39739d;
        box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);

        &:hover {
          background: #b3d3ea;
          color: #2c5877;
        }
      }

      & .signup-button {
        border: 1px solid #0a95ff;
        background: #0a95ff;
        color: white;
        box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
        margin-left: 4px;

        &:hover {
          background: #0074cc;
          border-color: #0074cc;
          cursor: pointer;
        }
      }
    }
  }
`;

const Search = () => {
  return (
    <Form
      onSubmit={(e) => {
        // 게시글 검색 URL로 링크보낼 것

        console.log(e.target[0].value);
        e.preventDefault();
      }}
    >
      <div className="top--searchbar">
        <Input placeholder="Search..." />
        <svg
          xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="input-icon__search"
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
    </Form>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">
          <span></span>
        </Logo>
        <NavtoPages>
          <li>
            <a href="https://stackoverflow.co/">About</a>
          </li>
          <li
            onClick={(e) => {
              if (e.target.classList.value === 'is-selected') {
                e.target.classList.remove('is-selected');
              } else {
                e.target.classList.add('is-selected');
              }
            }}
          >
            <a href="/">Products</a>
          </li>
          <li>
            <a href="https://stackoverflow.co/teams/">For Teams</a>
          </li>
        </NavtoPages>
        <Search />
        <NavIconContent>
          <ul>
            <li>
              <a className="login-button" href="/login">
                Log in
              </a>
            </li>
            <li>
              <a className="signup-button" href="/signup">
                Sign up
              </a>
            </li>
          </ul>
        </NavIconContent>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
