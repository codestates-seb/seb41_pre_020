// import { IconLogo, IconSearch } from '@stackoverflow/stacks-icons';
// import { Icon } from './Util/convertor';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
  position: fixed !important;
  top: 0;
  width: 100%;
  height: 50px;
  background: #f8f9f9;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const Headertop = styled.div`
  background: #f48225;
  height: 2px; ;
`;

const Nav = styled.nav`
  width: 78rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  & a {
    height: 100%;
    padding: 0 16px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const Hamburger = styled.span`
  & {
    width: 16px;
    height: 2px;
    background-color: hsl(210, 8%, 35%);
    position: relative;
  }
  &:before {
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: hsl(210, 8%, 35%);
    content: '';
    left: 0;
    top: -5px;
    transition: top, transform;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }
  &:after {
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: hsl(210, 8%, 35%);
    content: '';
    left: 0;
    top: 5px;
    transition: top, transform;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }
`;

const Logo = styled.div`
  background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
  display: inline-block;
  margin-left: 0;
  width: 150px;
  height: 30px;
  margin-top: -4px;
  background-position: 0 -500px;
`;

const Form = styled.form`
  padding: 0 calc(8px * 1);
  display: flex;
  align-items: center;
  flex-shrink: 10000;
  flex-grow: 1;
  position: relative;
  & > svg {
    color: hsl(210, 8%, 55%);
    right: auto;
    vertical-align: bottom;
    left: 0.7em;
    position: absolute;
    top: 50%;
    margin-top: -9px;
    pointer-events: none;
  }
`;

const Input = styled.input`
  border-color: hsl(210, 8%, 75%);
  background-color: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 25%);
  display: block;
  /* line-height: calc(15 / 13) px; */
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  padding: 0.6em 0.7em;
  padding-left: 32px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  font-size: 13px;
  font-family: inherit;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #d3e5f2;
  }
`;

const NavtoPages = styled.ol`
  display: flex;
  margin: -2px;
  margin-top: -6px;
  padding: 2px 0;
  flex-wrap: wrap;
  list-style: none;
  border: none;
  & > li > a {
    color: hsl(210, 8%, 35%);
    display: flex;
    align-items: center;
    padding: 6px 12px;
    position: relative;
    border: none;
    font: unset;
    background: none;
    box-shadow: none;
    cursor: pointer;
    user-select: auto;
    border-radius: 1000px;
    margin: 2px;
    white-space: nowrap;
    font-size: 13px;
    &:hover {
      background: #e3e6e8;
    }
    /* &:focus {
            outline: none;
            box-shadow: 0 0 0 3px #d3e5f2;
        } */
    &.is-selected {
      background: hsla(27, 90%, 55%, 1);
      color: #ffffff;
      &:hover {
        background: #da680b;
      }
    }
  }
`;

const NavIconContent = styled.ol`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  margin-left: auto;
  & > li {
    display: inline-flex;
    & > a {
      color: hsl(210, 8%, 35%);
      /* color: wheat; */
      display: inline-flex;
      align-items: center;
      padding: 0 10px;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      & .is-selected,
      :hover,
      :focus {
        color: hsl(210, 8%, 15%);
        /* color: powderblue; */
        background-color: hsl(210, 8%, 90%);
        text-decoration: none;
        outline: none;
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
      <Input />
    </Form>
  );
};

// const PopOver = () => {
//     return (
//         <div>
//             <div></div>
//             <ol></ol>
//         </div>
//     );
// };

const Header = () => {
  return (
    <StyledHeader>
      <Headertop></Headertop>
      <Nav>
        <a href='#!'>
          <Hamburger></Hamburger>
        </a>
        <a href='/'>
          <Logo></Logo>
        </a>
        <NavtoPages>
          <li
            onClick={(e) => {
              if (e.target.classList.value === 'is-selected') {
                e.target.classList.remove('is-selected');
              } else {
                e.target.classList.add('is-selected');
              }
            }}
          >
            <a href='#!'>Products</a>
          </li>
        </NavtoPages>
        {/* <PopOver></PopOver> */}
        <Search />
        <NavIconContent>
          <li>
            <a href='#!'>{/* <FontAwesomeIcon icon={faUser} /> */}</a>
          </li>
          <li>
            <a href='#!' onClick={(e) => {}}>
              {/* <FontAwesomeIcon icon={faBox} /> */}
            </a>
          </li>
          <li></li>
          <li>
            <a
              href='#!'
              // onClick={(e) => {
              //     if (e.target.classList.value === 'is-selected') {
              //         e.target.classList.remove('is-selected');
              //     } else {
              //         e.target.classList.add('is-selected');
              //     }
              // }}
            >
              {/* <FontAwesomeIcon icon={faTrophy} /> */}
            </a>
          </li>
          <li></li>
          <li>
            <a
              href='#!'
              // onClick={(e) => {
              //     if (e.target.classList.value === 'is-selected') {
              //         e.target.classList.remove('is-selected');
              //     } else {
              //         e.target.classList.add('is-selected');
              //     }
              // }}
            >
              {/* <FontAwesomeIcon icon={faCircleQuestion} /> */}
            </a>
          </li>
          <li></li>
          <li>
            <a
              href='#!'
              onClick={(e) => {
                // if (e.target.classList.value === 'is-selected') {
                //     e.target.classList.remove('is-selected');
                // } else {
                //     e.target.classList.add('is-selected');
                // }
              }}
            >
              {/* <FontAwesomeIcon icon={faBars} /> */}
            </a>
          </li>
          <li></li>
        </NavIconContent>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
