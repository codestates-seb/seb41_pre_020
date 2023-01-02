/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import AnswerVote from './AnswerVote';
import { getLoginCookie } from '../../util/cookie';
import { useSelector } from 'react-redux';
import PostVote from '../common/PostVote';

const Container = styled.div`
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid #d6d9dc;
  display: grid;
  grid-template-columns: max-content 1fr;

  & .answer--main {
    padding-right: 16px;
    grid-column: 2;
    width: auto;

    & .answer-main--body {
      font-size: 15px;
      line-height: 22px;
    }

    & .answer-main--sub-info {
      display: flex;
      padding-top: 4px;
      margin: 16px 0;
      align-items: flex-start;
      justify-content: flex-end;
      flex-wrap: wrap;

      & .sub-info--controls {
        display: flex;
        gap: 8px;
        margin-right: 16px;
        width: 96px;
        flex: 1 auto;

        & span {
          color: #6a737c;
        }
      }

      & .sub-info--writer {
        display: flex;
        gap: 8px;
        padding: 8px;
        background-color: #e1ecf4;
        border-radius: 3px;
        cursor: default;

        & .writer-img {
          background-color: #5eba7d;
          width: 34px;
          height: 34px;
          border-radius: 3px;
        }

        & .writer-info {
          div {
            color: #6a737c;
          }

          & .writer-name {
            color: #0074cc;
          }
        }
      }
    }
  }
`;
const Edit = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  textarea {
    min-height: 50px;
    min-width: 850px;
    font-size: 14px;
    color: #363b3f;
    text-indent: 10px;
    border: 1px solid #8a939b;
    margin-bottom: 15px;
    border-radius: 5px;
    padding-top: 5px;
  }
  textarea:focus {
    border: 1px solid cornflowerblue;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 0 0 3px #cde9fe;
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    // min-width: 850px;
  }
  button {
    background-color: transparent;
    border: none;
    margin-left: 10px;
    color: gray;
    cursor: pointer;
  }
`;

const AnswerItem = ({ answer }) => {
  // const state = useSelector((state) => state.signInReducer);
  const [content, setContent] = useState(answer.content);
  // const userData = JSON.parse(localStorage.getItem('userData'));
  // let memberId = parseInt(userData.memberId);
  // let aid = data.answer_id;
  const [isEdit, setIsEdit] = useState(false);
  // const [votes, setVotes] = useState(0);
  // const createdAt = new Date(data.create_date).toLocaleDateString('en-us', {
  //   hour: 'numeric',
  //   minute: 'numeric',
  // });
  const url = 'http://43.201.60.216:8080';
  // const deleteAnswer = () => {
  //   axios
  //     .delete(`${url}/answers/${data.answerId}`, {
  //       headers: { Authorization: getLoginCookie() },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       console.log('답변 삭제성공');
  //     });
  // };
  const editAnswer = () => {
    const putForm = {
      // post_id: pid,
      // member_id: state.data.memberid,
      content: content,
    };
    axios
      .put(`${url}/answers/${answer.answerId}`, putForm, {
        headers: { Authorization: getLoginCookie() },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const onIncreaseVote = () => {
  //   let data = {};
  //   axios
  //     .post(`${url}/answers/${data.answerId}/up-vote`, data, {
  //       headers: { Authorization: getLoginCookie() },
  //     })
  //     .then(() => {
  //       setVotes(votes + 1);
  //     });
  // };
  // const onDecreaseVote = () => {
  //   axios
  //     .post(`${url}/answers/${data.answerId}/down-vote`, data, {
  //       headers: { Authorization: getLoginCookie() },
  //     })
  //     .then(() => {
  //       setVotes(votes - 1);
  //     });
  // };

  return (
    <>
      <Container>
        <PostVote votes={answer.votes} />
        <div className="answer--main">
          <p className="answer-main--body">{answer.content}</p>
          <div className="answer-main--sub-info">
            <div className="sub-info--controls">
              <span>Share</span>
              <span>Edit</span>
              <span>Follow</span>
              {/* {state.loginState &&
              state.data.memberId === parseInt(data.member_id) ? (
                <>
                  <button onClick={() => setIsEdit(true)}>Edit</button>
                  <button onClick={() => deleteAnswer()}>Delete</button>
                </>
              ) : null} */}
            </div>
            <div className="sub-info--writer">
              <div className="writer-img">{/* <img src={answer.member.profileImage} /> */}</div>
              <div className="writer-info">
                <div>Answered {answer.createdAt}</div>
                <div className="writer-name">{answer.member.displayName}</div>
              </div>
            </div>
          </div>
          {isEdit ? (
            <Edit>
              <textarea
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="btn">
                <button onClick={editAnswer}>Edit</button>
                <button onClick={() => setIsEdit(false)}>Cancel</button>
              </div>
            </Edit>
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default AnswerItem;
