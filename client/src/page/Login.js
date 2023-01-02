import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import LoginComponent from '../component/login/LoginComponent';

const LogInContainer = styled.div`
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

function LogIn() {
  return (
    <LogInContainer>
      <Header />
      <LoginComponent />
    </LogInContainer>
  );
}

export default LogIn;
