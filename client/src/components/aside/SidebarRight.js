import styled from 'styled-components';
import * as Icons from '@stackoverflow/stacks-icons';
import React from 'react';

const Sidebar = styled.div`
  float: right;
  margin: 0 0 15px;
  margin-left: 24px;
  width: 300px;
  border: 1px solid #f1e5bc;
  background-color: #fdf7e2;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;

  & ul {
    list-style: none;
  }

  & .sidebar--heading {
    background-color: #fbf3d5;
    padding: 12px 15px;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: rgb(82, 89, 96);
    border-bottom: 1px solid #f1e5bc;
  }

  & .border-top {
    border-top: 1px solid #f1e5bc;
  }

  & .sidebar--item {
    margin: 12px 0;
    display: flex;
    padding: 0 16px;

    & .svg-icon {
      flex-shrink: 0;
      flex-basis: 8.33333333%;

      & svg {
        vertical-align: text-top;

        & > * {
          fill: #232629 !important;
        }
      }
    }

    & span {
      min-width: 0;
      overflow-wrap: break-word;
    }
  }
`;

export default function SidebarRight() {
  return (
    <Sidebar className="right-sidebar">
      <ul>
        <li className="sidebar--heading">The Overflow Blog</li>
        <li className="sidebar--item">
          <div className="svg-icon">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="va-text-top svg-icon iconPencilSm"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"
                fill="#232629"
              ></path>
            </svg>
          </div>
          <span>The complete guide to protecting your APIs with OAuth2 (part 1)</span>
        </li>
        <li className="sidebar--item">
          <div className="svg-icon">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="va-text-top svg-icon iconPencilSm"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"
                fill="#232629"
              ></path>
            </svg>
          </div>
          <span>The three top-paying tech roles in 2022 and the skills you need to land them</span>
        </li>
        <li className="sidebar--heading border-top">The Overflow Blog</li>
        <li className="sidebar--item">
          <div
            className="svg-icon"
            dangerouslySetInnerHTML={{
              __html: Icons.IconLogoGlyphXxs,
            }}
          />
          <span>Navigation and UI research starting soon</span>
        </li>
        <li className="sidebar--item">
          <div
            className="svg-icon"
            dangerouslySetInnerHTML={{
              __html: Icons.IconLogoGlyphXxs,
            }}
          />
          <span>2022 Community Moderator Election Results - now with two more mods!</span>
        </li>
        <li className="sidebar--item">
          <div
            className="svg-icon"
            dangerouslySetInnerHTML={{
              __html: Icons.IconLogoGlyphXxs,
            }}
          />
          <span>Temporary policy: ChatGPT is banned</span>
        </li>
        <li className="sidebar--item">
          <div
            className="svg-icon"
            dangerouslySetInnerHTML={{
              __html: Icons.IconLogoGlyphXxs,
            }}
          />
          <span>I'm standing down as a moderator</span>
        </li>
      </ul>
    </Sidebar>
  );
}
