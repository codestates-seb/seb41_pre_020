import React from 'react';
import styled from 'styled-components';
import { Search } from './Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';

const NavContainer = styled.div`
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

  & > nav {
    display: flex;
    width: 97.2307692rem;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    align-items: center;
  }
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

const NavIconContent = styled.nav`
  padding-right: 12px;
  margin-left: auto;

  & ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: auto;
    height: 100%;

    & li {
      display: inline-flex;
      align-items: center;

      &:first-child a {
        height: 24px;
        display: inline-flex;
        align-items: center;
        padding: 0 12px;
        background-color: transparent;
        height: 47px;

        & img {
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }

        &:hover {
          background-color: #e3e6e8;
        }
      }

      & .logout--button {
        line-height: 15px;
        padding: 0 10.5px;
        display: inline-flex;
        align-items: center;
        padding: 0 12px;
        background-color: transparent;
        height: 47px;
        color: #525960;
        border: 0;
        cursor: pointer;

        &:hover {
          background-color: #e3e6e8;
          color: #0c0d0e;
        }
      }
    }
  }
`;

function LoginedHeader({ setLogin }) {
  const navigate = useNavigate();

  const logOutButton = () => {
    axios
      .delete(`/api/members/logout`, {
        headers: { Refresh: `${localStorage.getItem('login-refresh')}` },
      })
      .then(() => {
        localStorage.removeItem('login-token');
        localStorage.removeItem('login-refresh');
        setLogin(false);
        navigate(`/?sortBy=present&page=1`);
      });
  };
  const logined = localStorage.getItem('login-token');
  const user = jwt(logined);
  
  return (
    <NavContainer>
      <nav>
        <Logo to="/">
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
              <a className="profile--button" href="!#">
                <img src="http://identicon.net/img/identicon.png" alt="profile" />
              </a>
            </li>
            <li>
              <button className="logout--button" onClick={logOutButton}>
                Log out
              </button>
            </li>
          </ul>
        </NavIconContent>
      </nav>
    </NavContainer>
  );
}

export default LoginedHeader;
