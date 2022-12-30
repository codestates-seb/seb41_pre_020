import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionInput from '../components/askQuestion/QuestionInput';
import { DiscardModal } from '../components/askQuestion/DiscardModal';
import Footer from '../components/Footer';

const Background = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  background-color: #f8f9f9;

  & > div {
    min-height: 750px;
    overflow: visible;
    width: 100%;
    max-width: 1264px;
    padding: 24px;
    padding-top: 0;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  height: 130px;
  background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
  width: 100% !important;
  background-repeat: no-repeat;
  background-position: right bottom;
  align-items: center;

  & h1 {
    font-weight: 600;
    font-size: 27px;
    line-height: 35.1px;
    margin-top: 24px;
    margin-bottom: 27px;
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

const EditQuestion = ({ userInfo }) => {
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
      <Background>
        <div>
          <QuestionContainer>
            <TitleDiv>
              <h1>Edit a public question</h1>
            </TitleDiv>
            <form>
              <QuestionInput userInfo={userInfo} />
              <ButtonDiv>
                <PostButton onSubmit={handleSubmit}>
                  Save edits
                </PostButton>
                <DiscardModal type='edits'></DiscardModal>
              </ButtonDiv>
            </form>
          </QuestionContainer>
        </div>
      </Background>
      <Footer />
    </div>
  );
};

export default EditQuestion;
