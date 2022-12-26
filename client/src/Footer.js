import { Icon } from './Util/convertor';
import { IconLogoGlyphMd } from '@stackoverflow/stacks-icons';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #9199a1;
  background-color: #232629;

  & .footer {
    padding: 32px 12px;
    max-width: 1264px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;

    & .footer--logo {
      flex: 0 0 64px;
      margin: -12px 0 32px 0;
    }

    & .footer--nav {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;
    }

    & .footer--col {
      padding: 0 12px 24px 0;
      flex: 1 0 auto;
    }

    & .footer--heading {
      text-transform: uppercase;
      color: #babfc4;
      font-weight: bold;
      margin-bottom: 12px;
    }

    & ul {
      list-style: none;
      margin: 0;
    }

    & li {
      color: #9199a1;
      padding: 4px 0;
    }

    & .footer--copyright {
      flex: 1 1 150px;
      display: flex;
      flex-direction: column;

      & .footer--copyright-nav {
        display: flex;
        flex-direction: row;
        list-style: none;

        & li + li {
          margin-left: 12px;
        }

        & .footer--copyright-nav-link {
          font-size: 11px;
          line-height: 14.5px;
        }
      }

      & p {
        margin-top: 188.5px;
        margin-bottom: 24px;
        color: #9199a1;
        font-size: 11px;
        line-height: 14.5px;
      }
    }
  }

  a {
    color: #9199a1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="footer--logo">
          <a href="#!">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
        </div>
        <nav className="footer--nav">
          <div className="footer--col">
            <h5 className="footer--heading">Stack Overflow</h5>
            <ul>
              <li>Questions</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer--col">
            <h5 className="footer--heading">Products</h5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div className="footer--col">
            <h5 className="footer--heading">Teammates</h5>
            <ul>
              <li>
                <a href="https://github.com/vinyangda">양다빈</a>
              </li>
              <li>
                <a href="https://github.com/hyejinme">김혜진</a>
              </li>
              <li>
                <a href="https://github.com/ashleysyheo">허서영</a>
              </li>
              <li>
                <a href="https://github.com/kimmj13">김민정</a>
              </li>
              <li>
                <a href="https://github.com/jingoworld">최진우</a>
              </li>
              <li>
                <a href="https://github.com/Yujeu07">유제웅</a>
              </li>
            </ul>
          </div>
          <div className="footer--col">
            <h5 className="footer--heading">Stack Exchange Network</h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li style={{ marginTop: '16px' }}>API</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </nav>
        <div className="footer--copyright">
          <ul className="footer--copyright-nav">
            <li className="footer--copyright-nav-link">Blog</li>
            <li className="footer--copyright-nav-link">Twitter</li>
            <li className="footer--copyright-nav-link">Facebook</li>
            <li className="footer--copyright-nav-link">LinkedIn</li>
            <li className="footer--copyright-nav-link">Instagram</li>
          </ul>
          <p>
            Site design / logo ⓒ 2022 Stack Exchange Inc; user contributions licensed under CC
            BY-SA. 
            <br />
            rev 2022.19.43125
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
