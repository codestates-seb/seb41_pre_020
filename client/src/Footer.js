import { Icon } from './Util/convertor';
import { IconLogoGlyphMd } from '@stackoverflow/stacks-icons';
import React from 'react';
import styled from 'styled-components';

const Styledfooter = styled.footer`
  background-color: hsl(210, 8%, 15%);
  background-position: top left;
  background-repeat: no-repeat;
  border-top: 0;
  background-size: auto;
  color: hsl(210, 8%, 60%);
  padding-top: 0;
  padding-bottom: 0;
  display: block;
  & a,
  a:visited,
  a:active,
  a:focus {
    text-decoration: none;
    color: hsl(210, 8%, 60%);
  }
  & > div {
    width: 78rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 32px 12px 12px 12px;
    display: flex;
    flex-flow: row wrap;
    & > div:first-child {
      margin-right: 40px;
      & > a > svg {
        width: 32px;
        height: 37px;
      }
    }
    & > nav {
      display: flex;
      /* margin-right: 40px; */
      & > div {
        margin-right: 100px;
        & > h5 {
          margin: 0 0 10px 0;
        }
        & > ul {
          list-style: none;
          padding: 0;
          & > li {
            font-size: 13px;
            margin-bottom: 8px;
          }
        }
      }
    }
    & > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 8px;
      flex: 1 1 150px;
      & > ul {
        padding-left: 0;
        list-style: none;
        display: flex;
        margin-top: 0;
        & > li {
          margin-right: 8px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <Styledfooter>
      <div>
        <div>
          <a href='#!'>
            <div>{Icon(IconLogoGlyphMd)}</div>
          </a>
        </div>
        <nav>
          <div>
            <h5>STACK OVERFLOW</h5>
            <ul>
              <li>Questions</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h5>PRODUCTS</h5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div>
            <h5>TEAMMATES</h5>
            <ul>
              <li>
                <a href='https://github.com/vinyangda'>양다빈</a>
              </li>
              <li>
                <a href='https://github.com/hyejinme'>김혜진</a>
              </li>
              <li>
                <a href='https://github.com/ashleysyheo'>허서영</a>
              </li>
              <li>
                <a href='https://github.com/kimmj13'>김민정</a>
              </li>
              <li>
                <a href='https://github.com/jingoworld'>최진우</a>
              </li>
              <li>
                <a href='https://github.com/Yujeu07'>유제웅</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li> </li>
              <li>API</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </nav>
        <div>
          <ul>
            <li>
              <a href='#!'>Blog</a>
            </li>
            <li>
              <a href='#!'>Twitter</a>
            </li>
            <li>
              <a href='#!'>Facebook</a>
            </li>
            <li>
              <a href='#!'>Linkedin</a>
            </li>
            <li>
              <a href='#!'>Instagram</a>
            </li>
          </ul>
          <p>
            Site design / logo ⓒ 2022 Stack
            <br />
            Exchange Inc; user contributions licensed
            <br />
            under CC BY-SA. rev 2022.19.43125
          </p>
        </div>
      </div>
    </Styledfooter>
  );
};

export default Footer;
