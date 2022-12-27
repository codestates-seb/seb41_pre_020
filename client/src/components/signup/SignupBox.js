import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1264px;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

const SignUpInfoContainer = styled.div`
  max-width: 421.333px;
  margin-bottom: 128px;
  margin-right: 48px;

  & h1 {
    font-size: 27px;
    line-height: 27px;
    margin-bottom: 32px;
  }

  & .signup__info-container--text {
    display: flex;
    margin-bottom: 24px;

    & > p {
      font-size: 15px;
      line-height: 24px;
    }
  }

  & .signup__info-container--icon {
    margin-right: 8px;
  }

  & .signup__info-container--sub-text {
    color: #6a737c;
  }
`;

const SignUpContainer = styled.div`
  flex-shrink: 0;

  & .signup__box--subtext {
    width: 100%;
    text-align: center;
  }
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

const SignUpBox = styled.div`
  max-width: 314px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
  background-color: white;

  & .password-instruction {
    margin: 4px 0;
    font-size: 12px;
    line-height: 15.5px;
    color: #6a737c;
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
    margin: 0;
    border-radius: 3px;
    border: 1px solid #0a95ff;
    background: #0a95ff;
    color: white;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);

    :hover {
      background-color: #0074cc;
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

const Errormsg = styled.p`
  color: #de4f54;
  margin: 2px 0px;
  font-size: 12px;
  line-height: 15px;
`;

const Errormsg2 = styled.p`
  color: #de4f54;
  margin: 12px 0px;
  padding-left: 15px;
  font-size: 12px;
  line-height: 15px;
`;

const SignupButton = styled.button`
  border: 1px solid #0a95ff;
  background: #0a95ff;
  color: white;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  margin-left: 4px;
  line-height: 37px;
  &:hover {
    background: #0074cc;
    border-color: #0074cc;
    cursor: pointer;
  }
`;

function SignupBox() {
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState(false);
  const [errorMessage, setErrormessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('/api/members', {
        email: data.Email,
        name: data.name,
        password: data.password,
      })
      .then(() => {
        setErrormessage('');
        setSignUpError(false);
        navigate('/login');
      })
      .catch((error) => {
        setErrormessage(error.response.data.message);
        setSignUpError(true);
      });
  };

  return (
    <PageLayout>
      <SignUpInfoContainer>
        <h1>Join the Stack Overflow community</h1>
        <div className="signup__info-container--text">
          <div className="signup__info-container--icon">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              className="svg-icon mtn2"
            >
              <path
                opacity=".5"
                d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                fill="#0A95FF"
              ></path>
              <path
                d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                fill="#0A95FF"
              ></path>
            </svg>
          </div>
          <p>Get unstuck — ask a question</p>
        </div>
        <div className="signup__info-container--text">
          <div className="signup__info-container--icon">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              className="svg-icon mtn2"
            >
              <path
                d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"
                fill="#0A95FF"
              ></path>
              <path
                opacity=".5"
                d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                fill="#0A95FF"
              ></path>
            </svg>
          </div>
          <p>Unlock new privileges like voting and commenting</p>
        </div>
        <div className="signup__info-container--text">
          <div className="signup__info-container--icon">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              className="svg-icon mtn2"
            >
              <path
                d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                fill="#0A95FF"
              ></path>
              <path
                opacity=".5"
                d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                fill="#0A95FF"
              ></path>
            </svg>
          </div>
          <p>Save your favorite tags, filters, and jobs</p>
        </div>
        <div className="signup__info-container--text">
          <div className="signup__info-container--icon">
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              className="svg-icon mtn2"
            >
              <path
                d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"
                fill="#0A95FF"
              ></path>
            </svg>
          </div>
          <p>Earn reputation and badges</p>
        </div>
        <div className="signup__info-container--sub-text">
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </div>
      </SignUpInfoContainer>

      <SignUpContainer>
        <ExternalSignUpContainer>
          <button>
            <svg
              xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="native svg-icon iconGoogle"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                fill="#4285F4"
              ></path>
              <path
                d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                fill="#34A853"
              ></path>
              <path
                d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                fill="#EA4335"
              ></path>
            </svg>
            Sign up with Google
          </button>
        </ExternalSignUpContainer>

        <SignUpBox onSubmit={handleSubmit(onSubmit)}>
          <Formblock>
            <label htmlFor="Display name">Display name</label>
            <Input
              className={errors.name && errors.name.type === 'required' && 'invalid-input'}
              type="name"
              id="Display name"
              {...register('name', {
                required: true,
              })}
            />
            {errors.name && errors.name.type === 'required' && (
              <Errormsg>Display name cannot be empty.</Errormsg>
            )}
            {signUpError ? <Errormsg>{errorMessage}</Errormsg> : null}
          </Formblock>
          <Formblock>
            <label htmlFor="Email">Email</label>
            <Input
              className={
                errors.Email &&
                (errors.Email.type === 'required' || errors.Email.type === 'emailcheck') &&
                'invalid-input'
              }
              type="Email"
              id="Email"
              {...register('Email', {
                required: true,
                validate: {
                  emailcheck: (value) =>
                    (value &&
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                        value
                      )) ||
                    `${watch('Email')} is not a valid email address`,
                },
              })}
            />
            {errors.Email && errors.Email.type === 'required' && (
              <Errormsg>Email cannot be empty.</Errormsg>
            )}
            {errors.Email && errors.Email.type === 'emailcheck' && (
              <Errormsg>{errors.Email.message}</Errormsg>
            )}
          </Formblock>
          <Formblock>
            <label htmlFor="password">Password</label>
            <Input
              className={
                errors.password &&
                (errors.password.type === 'required' ||
                  errors.password.type === 'numcheck' ||
                  errors.password.type === 'lettercheck' ||
                  errors.password.type === 'minLength') &&
                'invalid-input'
              }
              type="password"
              id="password"
              {...register('password', {
                required: true,
                validate: {
                  numcheck: (value) =>
                    (value && /\d/.test(value)) ||
                    'Please add one of the following things to make your password stronger:',
                  lettercheck: (value) =>
                    (value && /[a-zA-Z]/.test(value)) ||
                    'Please add one of the following things to make your password stronger:',
                },
                minLength: 8,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <Errormsg>Password cannot be empty.</Errormsg>
            )}
            {errors.password && errors.password.type === 'numcheck' && (
              <Errormsg>{errors.password.message}</Errormsg>
            )}
            {errors.password && errors.password.type === 'numcheck' && (
              <Errormsg2>&#8226; numbers</Errormsg2>
            )}
            {errors.password && errors.password.type === 'lettercheck' && (
              <Errormsg>{errors.password.message}</Errormsg>
            )}
            {errors.password && errors.password.type === 'lettercheck' && (
              <Errormsg2>&#8226; letters</Errormsg2>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <Errormsg>Must contain at least {8 - watch('password').length} characters.</Errormsg>
            )}
          </Formblock>
          <p className="password-instruction">
            Passwords must contain at least eight characters, including at least 1 letter and 1
            number.
          </p>
          <Formblock>
            {' '}
            <SignupButton onClick={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
              Sign up
            </SignupButton>
          </Formblock>
        </SignUpBox>
        <div className="signup__box--subtext">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </SignUpContainer>
    </PageLayout>
  );
}

export default SignupBox;
