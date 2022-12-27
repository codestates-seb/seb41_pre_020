import React from 'react';
import styled from 'styled-components';
import LoginComponent from '../components/login/LoginComponent';

const LogInContainer = styled.div`
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

function LogIn({ setLogin }) {
  return (
    <LogInContainer>
      <LoginComponent setLogin={setLogin} />
    </LogInContainer>
  );
}

export default LogIn;
