import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SignupBox from '../component/signup/SignupBox';

const SignUpContainer = styled.div`
  min-height: calc(100vh - 50px);
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  flex: 1 0 auto;
  text-align: left;
  background-color: #f1f2f3;
`;

function SignUp() {
  return (
    <SignUpContainer>
      <Header />
      <SignupBox />
    </SignUpContainer>
  );
}

export default SignUp;