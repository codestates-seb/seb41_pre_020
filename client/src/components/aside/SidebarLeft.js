import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from "react";

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
    }

    & .youarehere {
      font-weight: bold;
      background-color: #f1f2f3;
      border-right: 3px solid #f48225;

      & span {
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
      color: #0c0d0e;
    }
  }
`;

const BotBox = styled.div``;

const WrapperTab = styled.div`
  & > div {
    border: 1px solid rgb(235, 237, 239);
    width: 165px;
    height: 290px;
    margin-left: -10px;
    padding: 15px;
    span {
      font-size: 13px;
      line-height: 17px;
      color: #525960;
    }
    span:first-child {
      color: #2f3337;
      font-weight: bolder;
    }
  }
`;

const Img = styled.img`
  width: 139px;
  height: 114px;
`;

const BtnCreateTeam = styled.a`
  display: block;
  width: 135px;
  height: 30px;
  background-color: #f48225;
  font-size: 11px;
  line-height: 12.7px;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  font-weight: 600;
  &:hover {
    color: white;
  }
`;

const BtnWhyTeam = styled(BtnCreateTeam)`
  background-color: white;
  color: #6a737c;
  font-weight: 400;
  &:hover {
    color: #6a737c;
    background-color: #f8f9f9;
  }
`;

export default function SidebarLeft() {
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
                <li>
                  <Link to="/" className="nav-link__with-icon youarehere">
                    <svg
                        xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="svg-icon iconGlobe"
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
                </li>
                <li>
                  <Link to="/tags" className="nav-links--link">
                    Tags
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="nav-links--link">
                    Users
                  </Link>
                </li>
                <li className="nav-links--heading">Collectives</li>
                <li>
                  <Link to="/" className="nav-link__with-icon">
                    <svg
                        xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="mt-auto fc-orange-400 svg-icon iconStarVerified"
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
          </ol>
          {/* <div href="/">
          <span>Home</span>
        </div>
        <div>
          <span>PUBLIC</span>
          <div>
            <div href="/">
              <svg xmlns="http://www.w3.org/2000/svg"></svg>
              <span>Questions</span>
            </div>
            <div href="/tags">
              <span>Tags</span>
            </div>
            <div href="/users">
              <span>Users</span>
            </div>
          </div>
        </div> */}
          <BotBox>
            <ol>
              <li>
                <div className="nav-links--heading">TEAMS</div>
              </li>
            </ol>
            <WrapperTab>
              <div>
                <span>Stack Overflow for Teams </span>
                <span>
              - Start collaborating and sharing organizational knowledge.
            </span>
                <Img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" />
                <BtnCreateTeam href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta">
                  Create a free Team
                </BtnCreateTeam>
                <BtnWhyTeam href="https://stackoverflow.co/teams/">
                  Why Teams?
                </BtnWhyTeam>
              </div>
            </WrapperTab>
          </BotBox>
        </div>
      </Sidebar>
  );
}