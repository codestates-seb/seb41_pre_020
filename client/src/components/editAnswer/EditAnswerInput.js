import React from "react";
import styled from "styled-components";
import { Editor } from "../editor/EditEditor";
import { Tag } from "./EditTag";

const AnswerInputBox = styled.div`
  width: 100%;
  /* height: 70%; */
  margin: 12px auto 0 auto;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  padding: 3%;
  background: #fff;
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
  & > div > label > div:first-child {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    /* font-weight: 700; */
  }
  & > div > label > div:nth-child(2) {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

// const Textarea = styled.textarea`
//   padding: 10px;
//   resize: none;
//   overflow: auto;
//   height: 200px;
//   border: 1px solid hsl(210, 8%, 75%);
//   border-radius: 3px;
//   &:focus {
//     outline: none;
//     border: 1px solid powderblue;
//     box-shadow: 0 0 0 3px #d3e5f2;
//   }
// `;

const EditAnswerInput = ({ userInfo }) => {
  return (
    <>
      <AnswerInputBox>
        <div>
          <label htmlFor="content">
            <div>You Answer</div>
          </label>
          <Editor />
        </div>
      </AnswerInputBox>
      <AnswerInputBox>
        <div>
          <label htmlFor="tag">
            <div>Tags</div>
            <div>Add up to 5 tags to describe what your question is about</div>
          </label>
          <Tag />
        </div>
      </AnswerInputBox>
    </>
  );
};

export default EditAnswerInput;
