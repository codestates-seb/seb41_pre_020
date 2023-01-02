import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginPage = styled.div`
  display: flex;
  width: 100%;
  max-width: 1264px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .login--logo-container {
    text-align: center;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
  }

  & .login--subtext {
    width: 100%;
    text-align: center;
  }
`;

const LoginContainer = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 288px;
  border-radius: 7px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  background-color: white;
`;

const ExternalSignUpContainer = styled.div`
  display: flex;
  max-width: 316px;
  margin: 0 auto;
  margin-bottom: 16px;
  flex-direction: column;

  & button {
    padding: 10.5px;
    background-color: white;
    color: #3b4045;
    border: 1px solid rgb(214, 217, 220);
    border-radius: 5px;

    &:hover {
      background-color: #f8f9f9;
    }

    & svg {
      vertical-align: baseline;
      margin-top: -0.3em;
      margin-bottom: -0.3em;
      margin-right: 4px;
    }
  }
`;

const Formblock = styled.form`
  display: flex;
  flex-direction: column;
  margin: 7px 0px;

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-top: 17px;
    margin-bottom: 0;
  }

  & > label {
    margin: 2px 0px;
    color: #0c0d0e;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    line-height: 19.6px;
  }

  & > button {
    border: 1px solid #0a95ff;
    background: #0a95ff;
    color: white;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    line-height: 37px;
    border-radius: 3px;

    &:hover {
      background: #0074cc;
      border-color: #0074cc;
      cursor: pointer;
    }
  }

  & .input--container {
    position: relative;

    & svg {
      display: none;
    }

    & .invalid-input--icon {
      display: block;
      position: absolute;
      top: 50%;
      right: 0.7em;
      margin-top: -17.5px;
      pointer-events: none;
    }
  }
`;

const Input = styled.input`
  margin: 4px 0;
  width: 100%;
  padding: 0.6em 0.7em;
  border: 1px solid #babfc4;
  border-radius: 3px;
  background-color: white;

  &::placeholder {
    color: #bbbfc3;
  }

  &:focus {
    outline: none;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 3px #dae5f1;
  }

  &.invalid-input {
    border-color: #de4f54 !important;

    &:focus {
      outline: none;
      border-color: #de4f54;
      box-shadow: 0 0 0 3px hsla(358, 62%, 47%, 0.15);
    }
  }
`;

// const Errormsg = styled.p`
//   color: #de4f54;
//   margin: 2px 0px;
//   font-size: 12px;
//   line-height: 15px;
// `;

function LoginComponent() {
  return (
    <LoginPage>
      <div>
        <div className='login--logo-container'>
          <Link to='/'>
            <svg
              aria-hidden='true'
              className='native svg-icon iconLogoGlyphMd'
              width='32'
              height='37'
              viewBox='0 0 32 37'
            >
              <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB' />
              <path
                d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
                fill='#F48024'
              />
            </svg>
          </Link>
        </div>
        <ExternalSignUpContainer>
          <button>
            <svg
              xlink='http://www.w3.org/1999/xlink'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              className='native svg-icon iconGoogle'
              width='18'
              height='18'
              viewBox='0 0 18 18'
            >
              <path
                d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z'
                fill='#4285F4'
              ></path>
              <path
                d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z'
                fill='#34A853'
              ></path>
              <path
                d='M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z'
                fill='#FBBC05'
              ></path>
              <path
                d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z'
                fill='#EA4335'
              ></path>
            </svg>
            Sign up with Google
          </button>
        </ExternalSignUpContainer>
        <LoginContainer>
          <Formblock>
            <label className='flex--item s-label' htmlFor='email'>
              Email
            </label>
            <div className='input--container'>
              <Input className='required' type='email' id='email' />

              <svg
                xlink='http://www.w3.org/1999/xlink'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='required'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path
                  d='M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z'
                  fill='#DE4F54'
                ></path>
              </svg>
            </div>
          </Formblock>
          <Formblock>
            <label className='flex--item s-label' htmlFor='password'>
              Password
            </label>
            <div className='input--container'>
              <Input className='required' type='password' id='password' />

              <svg
                xlink='http://www.w3.org/1999/xlink'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className={'required'}
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path
                  d='M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z'
                  fill='#DE4F54'
                ></path>
              </svg>
            </div>
          </Formblock>
          <Formblock>
            <button className='s-btn s-btn__primary' type='button'>
              Log in
            </button>
            <p />
          </Formblock>
        </LoginContainer>
        <div className='login--subtext'>
          Don't have an account? <a href='/signup'>Sign up</a>
        </div>
      </div>
    </LoginPage>
  );
}

export default LoginComponent;
