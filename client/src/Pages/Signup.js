import SignupText from "../components/signup/SignupText";
import styled from "styled-components";
import React from "react";
import { BodyContainer } from "../components/BodyContainer";
import SignupBox from "../components/signup/SignupBox";

const Background = styled.form`
  width: 100%;
  height: 100%;
  //background-color: #f1f2f3;
`;

const SignupInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 288px;
  height: 408px;
  left: 863px;
  top: 312px;
`;

const SignupInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 10px;

  width: 288px;
  /* height: 352px; */

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05),
    0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  flex: none;
  order: 0;
  flex-grow: 0;
  & > button {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10.5px;

    width: 240px;
    height: 37px;

    background: #0a95ff;
    border: 1px solid #0a95ff;
    border-radius: 3px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 0px;
  gap: 12px;
  background-color: white;

  width: 240px;
  height: 198px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SignupItem = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
  height: 50px;
  & > label {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    background-color: white;
  }
  & > input {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2px 10px;
    gap: 10px;

    position: absolute;
    width: 240px;
    height: 32px;
    left: 0px;
    top: 28px;

    /* White */

    background: #ffffff;
    border: 1px solid #babfc4;
    border-radius: 3px;
  }
`;

const SignupInputLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 16px 0px 0px;
  gap: 10px;

  width: 199px;
  height: 32px;

  flex: none;
  order: 1;
  flex-grow: 0;
  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px auto;
`;

function Signup() {
  return (
    <Background>
      <BodyContainer>
        <SignupContainer>
          <SignupText />
          <SignupBox />
        </SignupContainer>
      </BodyContainer>
    </Background>
  );
}

export default Signup;
