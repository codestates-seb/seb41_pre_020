import React from 'react';
import { BodyContainer } from '../components/BodyContainer';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import EditAnswerInput from '../components/editAnswer/EditAnswerInput';
import { DiscardModal } from '../components/askQuestion/DiscardModal';
import Footer from '../components/Footer';
import SidebarLeft from '../components/aside/SidebarLeft';
import SidebarRight from '../components/aside/SidebarRight';

const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  height: 100% !important;
  width: calc(100% - 164px);
  padding: 24px;

  & .edit-answer--container {
    width: calc(100% - 300px - 24px);
    float: left;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-bottom: 1px solid #e3e6e8;
  padding-bottom: 12px;
  margin-bottom: 20px;

  & h1 {
    font-size: 27px;
    line-height: 35.1px;
    overflow-wrap: break-word;
    margin-bottom: 12px;
    color: #232629;
  }
`;

const ButtonDiv = styled.div`
  margin-top: 12px;
`;

const PostButton = styled.button`
  display: inline-block;
  padding: 10.5px;
  border: 1px solid #0a95ff;
  background: #0a95ff;
  color: white;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #0074cc;
    border-color: #0074cc;
  }
`;

function EditAnswer({ userInfo }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const url = process.env.REACT_APP_SERVER;
  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      title: e.target[0].value,
      content: e.target[1].value,
      tag: e.target[2].value,
    };

    if (newQuestion.title === '' && newQuestion.content === '') {
      alert('빈칸들을 채워주세요!');
    } else if (newQuestion.content === '') {
      alert('본문을 입력해주세요!');
    } else if (newQuestion.title === '') {
      alert('내용을 입력해주세요!');
    } else {
      if (id === undefined) {
        // 요청이 post였다면
        fetch(`${url}/questions/ask`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newQuestion),
        })
          .then((res) => {
            if (res.status === 201) {
              return res.json();
            }
          })
          .then((data) => {
            navigate(`../questions/${data.data.questionId}`);
          });
      } else {
        // id값이 있다면, 즉 요청이 patch였다면
        fetch(`${url}/questions/ask/${id}`, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newQuestion),
        }).then((res) => {
          if (res.status === 200) {
            navigate(`/questions/${id}`);
          }
        });
      }
    }
  };
  return (
    <div>
      <BodyContainer>
        <SidebarLeft />
        <Main>
          <TitleDiv>
            <h1>Edit Answer</h1>
          </TitleDiv>
          <form className="edit-answer--container">
            <EditAnswerInput userInfo={userInfo} />
            <ButtonDiv>
              <PostButton onSubmit={handleSubmit}>Save edits</PostButton>
              <DiscardModal type="edits"></DiscardModal>
            </ButtonDiv>
          </form>
          <SidebarRight />
        </Main>
      </BodyContainer>
      <Footer />
    </div>
  );
}
export default EditAnswer;
