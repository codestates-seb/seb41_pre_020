import React from 'react';
import styled from 'styled-components';
import { Tag } from './Tag';

const QuestionInputBox = styled.div`
  display: flex;
  width: 100%;

  &:first-child {
    margin-top: 16px;
  }

  &:not(:first-child) {
    margin-top: 12px;
  }

  & > div {
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 24px;
    flex-shrink: 0;
    background: white;
    border: 1px solid #e3e6e8;

    & h5 {
      font-weight: bold;
      font-size: 15px;
      font-weight: 600;
      line-height: 19.5px;
    }

    & p {
      margin: 2px 0;
    }

    & > input {
      margin-top: 4px;
      margin-bottom: 2px;
      padding: 8px 9px;
      border: 1px solid #babfc4;
      background-color: white;
      border-radius: 3px;

      &::placeholder {
        color: #bbbfc3;
      }

      &:focus {
        outline: none;
        border-color: #6bbbf7;
        box-shadow: 0 0 0 3px #dae5f1;
      }
    }
  }
`;

const QuestionInput = () => {
  return (
    <div>
      <QuestionInputBox>
        <div>
          <label htmlFor='id'>
            <h5>Title</h5>
            <p>
              Be specific and imagine you're asking a question to another person
            </p>
          </label>
          <input
            type='text'
            id='title'
            placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
            // defaultValue={userInfo.title === undefined ? '' : userInfo.title}
          ></input>
        </div>
      </QuestionInputBox>
      <QuestionInputBox>
        <div>
          <label htmlFor='content'>
            <h5>What is your problem?</h5>
            <p>
              Introduce the problem and expand on what you put in the title.
            </p>
          </label>
          <textarea
            initialValue='write here'
            height='300px'
            initialEditType='markdown'
            useCommandShortcut={false}
            hideModeSwitch
            // ref={editorRef}
            // onChange={onChange}
          />
        </div>
      </QuestionInputBox>
      <QuestionInputBox>
        <div>
          <label htmlFor='tag'>
            <h5>Tags</h5>
            <p>Add up to 5 tags to describe what your question is about</p>
          </label>
          <Tag />
        </div>
      </QuestionInputBox>
    </div>
  );
};

export default QuestionInput;
