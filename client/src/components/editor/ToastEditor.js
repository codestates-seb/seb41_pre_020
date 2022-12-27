import React, { useRef } from 'react';
import styled from "styled-components";

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

const EditorWrapDiv = styled.div`
  margin: 4px 0;
  border-radius: 5px;
`;

export default function ToastEditor({ setValue, setSendAnswer }) {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    setValue(data);
    if (data.length < 16) {
      setSendAnswer(false);
    } else {
      setSendAnswer(true);
    }
  };

  return (
      <EditorWrapDiv>
        <Editor
            initialValue="hello world!"
            previewStyle="vertical"
            height="300px"
            initialEditType="markdown"
            useCommandShortcut={false}
            language="ko-KR"
            hideModeSwitch
            ref={editorRef}
            onChange={onChange}
        />
      </EditorWrapDiv>
  );
}