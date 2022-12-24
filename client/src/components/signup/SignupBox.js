import React, { startTransition, useState } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  width: 316px;
  height: 80%;
  margin: 24px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  padding: 3%;
  background: #fff;
  border-radius: 4px;
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1 auto;
    margin-bottom: 20px;
    & > input {
      padding: 5px;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      &:focus {
        outline: none;
        border: 1px solid powderblue;
        box-shadow: 0 0 0 3px #d3e5f2;
      }
    }
  }
`;

const LabelWrap = styled.div`
  margin: 6px 0;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 700;
  margin: 2px 0;
  padding: 0 2px;
  color: #0c0d0c;
`;

const Sentense = styled.p`
  width: 240px;
  height: 45px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #6a737c;
`;

const SignupButton = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10.5px;
  margin: 20px 0;

  width: 100%;
  height: 37px;

  background: #0a95ff;
  border: 1px solid #0a95ff;
  border-radius: 3px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  font-weight: 600;
  font-size: 13px;
  color: white;
  line-height: 16px;

  :hover {
    background-color: #0762a6;
    cursor: pointer;
  }
`;

const SignupBox = () => {
  const [title, setTitle] = useState("");
  return (
    <Container>
      <LabelWrap>
        <Label>Display name</Label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
        />
      </LabelWrap>
      <LabelWrap>
        <Label>Email</Label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
        />
      </LabelWrap>
      <LabelWrap>
        <Label>Password</Label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
        />
      </LabelWrap>
      <Sentense>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </Sentense>
      <SignupButton>Sign up</SignupButton>
    </Container>
  );
};

export default SignupBox;
