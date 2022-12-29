import React from 'react';
import styled from 'styled-components';
import { Editor } from '../editor/EditEditor';

const AnswerInputBox = styled.div`
  width: 100%;

  .edit-answer__your-answer--header {
    margin-bottom: 20px;
    color: #232629;
    font-size: 19px;
    line-height: 1.3;
  }
`;

const EditAnswerInput = ({ userInfo }) => {
  return (
    <div>
      <AnswerInputBox>
        <h2 className="edit-answer__your-answer--header">Your Answer</h2>
        <Editor />
      </AnswerInputBox>
    </div>
  );
};

export default EditAnswerInput;
