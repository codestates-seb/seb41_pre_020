import React from 'react';
import styled from 'styled-components';
import SignupBox from '../components/signup/SignupBox';

const SignUpContainer = styled.div`
  min-height: calc(100vh - 50px);
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  flex: 1 0 auto;
  text-align: left;
  background-color: #f8f9f9;
`;

function SignUp() {
  return (
    <SignUpContainer>
      <SignupBox />
    </SignUpContainer>
  );
}

export default SignUp;
