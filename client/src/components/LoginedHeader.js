import React from 'react';
import * as Icons from '@stackoverflow/stacks-icons';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';

const NavContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 48px;
  background-color: white;
  padding: 0px;
  margin: 0px;
`;

const LogoDiv = styled.div`
  height: 100%;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  ::placeholder {
    padding-top: 1px;
    color: #959ca3;
  }
`;

const Search = styled.div`
  position: relative;
  left: 27px;
`;

const Email = styled.span`
  width: 128px;
  text-align: center;
`;

const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <NavContainer className="bs-sm bt btw3 z-selected bc-orange-400">
            <nav className="d-flex ai-center jc-end fd-row">
                <Link to="/">
                    <LogoDiv className="flex--item pb12 pt6 pl6 pr6">
                        <svg
                            aria-hidden="true"
                            className="svg-icon iconLogo native flex--item"
                            width="146"
                            height="30"
                        >
                            <path d="M21 27v-8h3v11H0V19h3v8h18Z" fill="#BCBBBB" />
                            <path
                                d="m5.4 19.1 13.56 1.96.17-2.38-13.26-2.55-.47 2.97Zm1.8-6.8 12 5.6 1.1-2.4-12-5.6-1.1 2.4Zm3.4-5.9 10.2 8.5 1.7-2-10.2-8.5-1.7 2ZM17.1.2 15 1.8l7.9 10.6 2.1-1.6L17.1.2ZM5 25h14v-3H5v3Z"
                                fill="#F48024"
                            />
                            <path
                                d="m33.9 18.9-1.62-.2c-1.25-.09-1.82-.57-1.82-1.53 0-1.05.76-1.73 2.3-1.73 1.05 0 2.01.3 2.68.77l.96-.96a5.67 5.67 0 0 0-3.64-1.05c-2.2 0-3.74 1.15-3.74 2.97 0 1.73 1.05 2.6 3.07 2.78l1.72.2c1.15.1 1.73.57 1.73 1.53 0 1.25-1.06 1.82-2.69 1.82-1.24 0-2.4-.29-3.16-1.15l-.96.96c1.15 1.06 2.5 1.44 4.22 1.44 2.5 0 4.12-1.15 4.12-3.07-.19-1.92-1.43-2.6-3.16-2.78Zm12.77-4.6c-1.63 0-2.69.28-3.55 1.43l.96.96c.57-.86 1.24-1.15 2.59-1.15 1.82 0 2.59.77 2.59 2.2v.97h-3.07c-2.3 0-3.55 1.15-3.55 2.97 0 .77.29 1.53.77 2.11.67.67 1.44.96 2.87.96 1.35 0 2.11-.29 2.98-1.06v.96h1.53v-6.9c-.1-2.3-1.44-3.46-4.12-3.46Zm2.59 6.7c0 .87-.2 1.45-.48 1.73-.67.58-1.44.68-2.3.68-1.63 0-2.3-.58-2.3-1.73s.76-1.82 2.3-1.82h2.87l-.1 1.15Zm7.29-5.36c.96 0 1.53.28 2.3 1.15l.96-.96c-1.06-1.15-1.92-1.54-3.36-1.54-2.59 0-4.5 1.73-4.5 5.28 0 3.45 1.91 5.27 4.5 5.27 1.44 0 2.3-.38 3.36-1.53l-1.06-.96c-.76.86-1.34 1.15-2.3 1.15-.96 0-1.82-.38-2.4-1.15-.48-.67-.67-1.44-.67-2.78 0-1.25.2-2.11.67-2.78a3.23 3.23 0 0 1 2.5-1.15Zm12.85-1.25h-1.82l-4.6 4.5V9.8h-1.54v14.77h1.54v-3.74L64.8 19l3.45 5.57h1.82l-4.22-6.62 3.55-3.55Zm7-.29c-1.53 0-2.58.58-3.26 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 0 0 3.27 1.35c1.53 0 2.68-.58 3.26-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.63-1.34-3.26-1.34Zm1.25 7.96c-.29.3-.67.48-1.24.48-.58 0-.96-.19-1.25-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59a1.7 1.7 0 0 1 1.25-.48c.57 0 .95.2 1.24.48.58.58.58 1.44.58 2.6.1 1.14 0 2.1-.58 2.58Zm10.36-7.86-2.1 6.62-2.21-6.62h-2.8l3.94 10.64h2.1L90.9 14.2h-2.88Zm7.3-.1c-2.79 0-4.61 1.92-4.61 5.47 0 4.32 2.4 5.47 4.9 5.47 1.91 0 2.96-.58 4.02-1.63l-1.63-1.54c-.67.67-1.25.96-2.4.96-1.53 0-2.3-.96-2.3-2.4h6.62v-1.15c0-3.07-1.63-5.18-4.6-5.18Zm-2.02 4.41c0-.48.1-.76.29-1.15.28-.67.86-1.15 1.82-1.15.86 0 1.53.48 1.82 1.15.2.39.2.67.29 1.15h-4.22Zm10.55-3.26V14.2h-2.59v10.64h2.69v-6.42c0-1.35.86-1.92 1.72-1.92.67 0 .96.2 1.44.67l2.02-2.01c-.77-.77-1.44-.96-2.5-.96-1.24-.1-2.2.38-2.78 1.05Zm5.39-2.2v11.8h2.69V16.4h1.91v-2h-1.91v-1.15c0-.58.28-.96.96-.96h1.05v-2.2h-1.53c-2.21 0-3.17 1.53-3.17 2.97Zm16.2 1.05c-1.54 0-2.6.58-3.27 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 0 0 3.27 1.35c1.53 0 2.68-.58 3.26-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.73-1.34-3.27-1.34Zm1.24 7.96c-.29.3-.67.48-1.25.48-.57 0-.95-.19-1.24-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59.28-.28.67-.48 1.24-.48.58 0 .96.2 1.25.48.58.58.58 1.44.58 2.6 0 1.14 0 2.1-.58 2.58Zm15.83-7.86-1.73 6.62-2.2-6.62h-1.92l-2.2 6.62-1.73-6.62h-2.79l3.26 10.64h2.21l2.2-6.71 2.21 6.71h2.21l3.26-10.64h-2.78Zm-24.57 7.38V9.98h-2.68v11.8c0 1.53.96 3.06 3.07 3.06h1.53v-2.2h-.96c-.67 0-.96-.39-.96-1.06Zm-76.92-5.56 1.34-1.34h-2.88v-3.36h-1.53v10.65c0 1.53.86 2.78 2.59 2.78h1.05V23.5h-.76c-.96 0-1.44-.57-1.44-1.53v-5.85l1.63-.1Z"
                                fill="var(--black-800)"
                            />
                        </svg>
                    </LogoDiv>
                </Link>
                <ul className="s-navigation s-navigation__muted d-flex ai-center flex--item">
                    <li className="d-flex ai-center jc-center pl6">
                        <a
                            href="https://stackoverflow.com/"
                            className="s-navigation--item flex--item"
                        >
                            Products
                        </a>
                    </li>
                </ul>
                <div className="d-flex ai-center ps-relative flex--item fl-grow1">
                    <Search
                        dangerouslySetInnerHTML={{ __html: Icons.IconSearch }}
                        className="flex--item fc-black-400"
                    />
                    <Input
                        className="s-input s-input__search flex--item "
                        id="example-search"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div className="flex--item d-flex">
                    <UserDiv>
                        <button
                            onClick={logOutButton}
                            className="s-btn s-btn__filled flex--item ml8 s-btn__sm w64"
                            type="button"
                        >
                            Log out
                        </button>
                        <Email className="w128">{user.username}</Email>
                    </UserDiv>
                </div>
            </nav>
        </NavContainer>
    );
}

export default LoginedHeader;