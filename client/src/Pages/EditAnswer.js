import React from "react";
import { BodyContainer } from "../components/BodyContainer";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import EditAnswerInput from "../components/editAnswer/EditAnswerInput";
import { DiscardModal } from "../components/askQuestion/DiscardModal";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
`;

const TitleDiv = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  & > div {
    font-size: 2rem;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
`;

const PostButton = styled.button`
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  margin-top: 32px;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
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

    if (newQuestion.title === "" && newQuestion.content === "") {
      alert("빈칸들을 채워주세요!");
    } else if (newQuestion.content === "") {
      alert("본문을 입력해주세요!");
    } else if (newQuestion.title === "") {
      alert("내용을 입력해주세요!");
    } else {
      if (id === undefined) {
        // 요청이 post였다면
        fetch(`${url}/questions/ask`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
    <Background>
      <BodyContainer>
        <TitleDiv>
          <div>Edit Answer</div>
        </TitleDiv>
        <form>
          <EditAnswerInput userInfo={userInfo} />
          <ButtonDiv>
            <PostButton onSubmit={handleSubmit}>
              {id === undefined
                ? "Post your question"
                : "Update  your question"}
            </PostButton>
            <DiscardModal></DiscardModal>
          </ButtonDiv>
        </form>
      </BodyContainer>
    </Background>
  );
}
export default EditAnswer;
