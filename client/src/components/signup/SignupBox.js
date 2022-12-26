import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ReactComponent as SpeechBubble } from '../../image/SpeechBubbleQuestion.svg';
import { ReactComponent as ArrowUpDown } from '../../image/ArrowUpDown.svg';
import { ReactComponent as Tags } from '../../image/Tags.svg';
import { ReactComponent as Achievements } from '../../image/Achievements.svg';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const SignUpPage = styled.div`
  width: 421px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    justify-content: center;
    align-items: center;
  }
`;

const SignUpContainer = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 318px;
  background-color: white;
  /* height: 234px; */
  border-radius: 7px;
  padding: 24px;
  margin-bottom: 24px;
  font-size: 13px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
  rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
`;

const Formblock = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 6px 0px;
  > button {
    background-color: #0a95ff;
    margin: 6px 0px;
    :hover {
      background-color: #0074cc;
    }
  }
  > label {
    margin: 6px 0px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const HeadText = styled.div`
  text-align: center;
  display: block;
  font-size: 21px;
  color: #232629;
  margin-bottom: 24px;
  line-height: initial;
  @media screen and (min-width: 817px) {
    display: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  width: 410px;
  height: 285px;
  display: block;
  @media screen and (max-width: 816px) {
    display: none;
  }
`;

const TitleText = styled.div`
  font-size: 27px;
  color: #232629;
  margin-bottom: 32px;
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const LeftText = styled.div`
  color: #232629;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const Input = styled.input`
  display: block;
  width: 260px;
  height: 35px;
  padding: 0 8px;
`;

const Errormsg = styled.p`
  display: block;
  color: #d0393e;
  margin: 2px 0px;
  padding: 2px;
  font-size: 12px;
`;

const Errormsg2 = styled.p`
  display: block;
  color: #d0393e;
  margin: 2px 0px;
  padding: 2px 2px 2px 20px;
  font-size: 12px;
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

  const onSubmit = data => {
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
        .catch(error => {
          setErrormessage(error.response.data.message);
          setSignUpError(true);
        });
  };

  return (
      <PageLayout>
        <TextBox>
          <TitleText>Join the Stack Overflow community</TitleText>
          <TitleBox>
            <SpeechBubble className='svg-icon mtn2 fc-blue-500 mr8' />
            <LeftText>Get unstuck — ask a question</LeftText>
          </TitleBox>
          <TitleBox>
            <ArrowUpDown className='svg-icon mtn2 fc-blue-500 mr8' />
            <LeftText>Unlock new privileges like voting and commenting</LeftText>
          </TitleBox>
          <TitleBox>
            <Tags className='svg-icon mtn2 fc-blue-500 mr8' />
            <LeftText>Save your favorite tags, filters, and jobs</LeftText>
          </TitleBox>
          <TitleBox>
            <Achievements className='svg-icon mtn2 fc-blue-500 mr8' />
            <LeftText>Earn reputation and badges</LeftText>
          </TitleBox>
          <p>
            Collaborate and share knowledge with a private group for FREE.
            <br></br>
            <a href='https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up'>Get Stack Overflow for Teams free for up to 50 users.</a>
          </p>
        </TextBox>

        <SignUpPage>
          <HeadText>
            Create your Stack Overflow account. It’s free and only takes a minute.
          </HeadText>
          <SignUpContainer onSubmit={handleSubmit(onSubmit)}>
            <Formblock>
              <label htmlFor="Display name">Display name</label>
              <Input
                  className="flex--item s-input"
                  type="name"
                  id="Display name"
                  {...register('name', {
                    required: true,
                  })}
              />
              {errors.name && errors.name.type === 'required' && (
                  <Errormsg>name cannot be empty.</Errormsg>
              )}
              {signUpError ? <Errormsg>{errorMessage}</Errormsg> : null}
            </Formblock>
            <Formblock>
              <label htmlFor="Email">Email</label>
              <Input
                  className="flex--item s-input"
                  type="Email"
                  id="Email"
                  {...register('Email', {
                    required: true,
                    validate: {
                      emailcheck: value =>
                          (value &&
                              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                                  value,
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
                  className="flex--item s-input"
                  type="password"
                  id="password"
                  {...register('password', {
                    required: true,
                    validate: {
                      numcheck: value =>
                          (value && /\d/.test(value)) ||
                          'Please add one of the following things to make your password stronger:',
                      lettercheck: value =>
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
                  <Errormsg2>• numbers</Errormsg2>
              )}
              {errors.password && errors.password.type === 'lettercheck' && (
                  <Errormsg>{errors.password.message}</Errormsg>
              )}
              {errors.password && errors.password.type === 'lettercheck' && (
                  <Errormsg2>• letters</Errormsg2>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                  <Errormsg>
                    Must contain at least {8 - watch('password').length} characters.
                  </Errormsg>
              )}
            </Formblock>
            <p
                style={{
                  fontSize: '12px',
                  color: '#6a737c',
                  lineHeight: '15.6923px',
                  display: 'block',
                  textAlign: 'left',
                }}
            >
              Passwords must contain at least eight characters, including at least
              1 letter and 1 number.
            </p>
            <Formblock>
              {' '}
              <SignupButton
                  onClick={handleSubmit(onSubmit)}
                  onSubmit={handleSubmit(onSubmit)}
              >
                Sign up
              </SignupButton>
              <p />
            </Formblock>
          </SignUpContainer>
          <div style={{ padding: '16px', fontSize: '14px', lineHeight: '17px' }}>
            Already have an account? <a href="/login">Log in</a>
          </div>
        </SignUpPage>
      </PageLayout>
  );
}

export default SignupBox;