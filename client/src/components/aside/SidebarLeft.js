import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Sidebar = styled.div`
  position: relative;
  width: 164px;
  flex-shrink: 0;
  box-shadow: 0 0 0 hsl(210deg 8% 5% / 5%);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;

  & .left-sidebar--sticky-container {
    top: 50px;
    max-height: calc(100vh - 50px);
    position: sticky;
    width: auto;
    padding-top: 24px;
    margin-bottom: 8px;

    & .nav-links {
      margin: 0 0 12px;
      list-style: none;
    }

    & .nav-links--heading {
      font-size: 11px;
      text-transform: uppercase;
      color: #6a737c;
      margin: 16px 0px 4px 8px;
      line-height: 14.5px;
    }

    & .nav-link__with-icon {
      display: flex;
      padding: 8px 6px 8px 8px;

      & svg {
        flex-shrink: 0;
        margin-top: -1px;
        margin-right: 4px;
      }

      & span {
        color: #6a737c;
        font-weight: inherit;
      }

      &:hover span {
        color: #0c0d0e !important;
      }
    }

    & .nav-links--link {
      padding: 4px 4px 4px 30px;
    }
  }

  & a {
    display: block;
    color: #525960;
    padding: 4px 4px 4px 8px;
    line-height: 26px;

    &:hover {
      color: #0c0d0e !important;
    }
  }
`;

const TeamsContainer = styled.div`
  padding: 12px 8px;
  border: 1px solid #d6d9dc;
  border-right: 0;
  color: #525960;

  & strong {
    color: #2f3337;
    font-weight: bold;
  }

  & img {
    margin: 8px 0;
  }
`;

const BtnCreateTeam = styled.a`
  &#left-sidebar--create-team-btn {
    border-radius: 3px;
    text-align: center;
    background-color: #f48225;
    border: 1px solid #f48225;
    font-size: 11px !important;
    line-height: 13px !important;
    padding: 6.5px !important;
    color: white;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  }
`;

const BtnWhyTeam = styled.a`
  &#left-sidebar--why-team-btn {
    border-radius: 3px;
    text-align: center;
    background-color: white;
    font-size: 11px !important;
    line-height: 13px !important;
    padding: 6.5px !important;
    color: #6a737c;

    &:hover {
      color: #525960;
      background-color: #f8f9f9;
    }
  }
`;

const List = styled.div`
  background-color: ${(props) => (props.selected ? 'hsl(210,8%,95%)' : 'none')};
  border-right: 3px solid ${(props) => (props.selected ? '#f48225' : 'none')};

  & a {
    color: ${(props) => (props.selected ? '#0c0d0e' : '#6a737c')} !important;
    font-weight: ${(props) => (props.selected ? 'bold' : '400')};
  }

  & .nav-link---icon-globe {
    & path {
      fill: ${(props) => (props.selected ? '#0c0d0e' : '#838c95')} !important;
    }

    &:hover path {
      fill: #0c0d0e !important;
    }
  }

  & .nav-link__with-icon span {
    color: ${(props) => (props.selected ? '#0c0d0e' : '#6a737c')} !important;
  }
`;

export default function SidebarLeft() {
  const { pathname } = useLocation();

  return (
    <Sidebar>
      <div className="left-sidebar--sticky-container">
        <ol className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <ol className="nav-links">
              <li className="nav-links--heading">Public</li>
              <List selected={pathname === '/' ? true : false}>
                <Link to="/" className="nav-link__with-icon nav-link---icon-globe">
                  <svg
                    xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg-icon iconGlobe"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"
                      fill="#0C0D0E"
                    ></path>
                  </svg>
                  <span>Questions</span>
                </Link>
              </List>
              <List selected={pathname === '/tags' ? true : false}>
                <Link to="/tags" className="nav-links--link">
                  Tags
                </Link>
              </List>
              <List selected={pathname === '/users' ? true : false}>
                <Link to="/users" className="nav-links--link">
                  Users
                </Link>
              </List>
              <li className="nav-links--heading">Collectives</li>
              <li>
                <Link to="/" className="nav-link__with-icon">
                  <svg
                    xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="mt-auto fc-orange-400 svg-icon iconStarVerified"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"
                      fill="#F48225"
                    ></path>
                  </svg>
                  <span>Explore Collectives</span>
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <ol className="nav-links">
              <li className="nav-links--heading">Teams</li>
              <li>
                <TeamsContainer id="nav-links--team-container">
                  <strong>Stack Overflow for Teams </strong>
                  – Start collaborating and sharing organizational knowledge.
                  <img
                    class="wmx100 mx-auto my8 h-auto d-block"
                    width="139"
                    height="114"
                    src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
                    alt=""
                  />
                  <BtnCreateTeam
                    id="left-sidebar--create-team-btn"
                    href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"
                  >
                    Create a free Team
                  </BtnCreateTeam>
                  <BtnWhyTeam
                    id="left-sidebar--why-team-btn"
                    href="https://stackoverflow.co/teams/"
                  >
                    Why Teams?
                  </BtnWhyTeam>
                </TeamsContainer>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Sidebar>
  );
}
