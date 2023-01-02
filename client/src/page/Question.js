import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../component/Footer';
import SidebarLeft from '../component/aside/SidebarLeft';
import Header from '../component/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BodyContainer } from '../component/BodyContainer';
import Answers from '../component/answer/Answers';
import SidebarRight from '../component/aside/SidebarRight';
import PostVote from '../component/common/PostVote';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionContainer = styled.div`
  padding: 24px;
  max-width: 1100px;
  width: calc(100% - 164px);
  margin: 0 auto;

  & .question--header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 4px;

    & h1 {
      overflow-wrap: break-word;
      font-size: 27px;
      line-height: 35.1px;
      margin-bottom: 8px;
      color: #232629;
    }

    & .question-header--ask-question-btn {
      margin-left: 12px;

      & button {
        padding: 10.5px;
        border-radius: 3px;
        border: 1px solid #0a95ff;
        background: #0a95ff;
        color: white;
        box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);

        &:hover {
          background: #0074cc;
          border-color: #0074cc;
        }
      }
    }
  }

  & .question--sub-header {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #d6d9dc;

    & span {
      color: #6a737c;
      margin-right: 16px;
    }
  }

  & .question--main-bar {
    width: calc(100% - 300px - 24px);
    float: left;
    clear: both;

    & .question__main--post {
      display: grid;
      grid-template-columns: max-content 1fr;

      & .question__main--post-content {
        vertical-align: top;
        padding-right: 16px;
        grid-column: 2;
        width: auto;

        & .post-content--body {
          font-size: 15px;
          line-height: 22px;
        }

        & .post-content--tags {
          margin-top: 24px;
          margin-bottom: 12px;
        }

        & .post-content--sub-info {
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
              background-color: #0a5894;
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
    }
  }
`;

const Edit = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h3 {
    font-size: 19px;
    line-height: 25px;
    margin-bottom: 20px; 
  }

  textarea {
    min-height: 50px;
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
    justify-content: flex-start;
  }

  button {
    margin-bottom: 12px;
    padding: 10.5px;
    border-radius: 3px;
    border: 1px solid #0a95ff;
    background: #0a95ff;
    color: white;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);

    &:hover {
      background: #0074cc;
      border-color: #0074cc;
      cursor: pointer;
    }
  }
`;

const Question = ({ lists, getQuestions }) => {
  let params = useParams();
  const [data, setData] = useState([]);
  const [pid, setPid] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [count, setCount] = useState(0);
  const [votes, setVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const url = 'http://43.201.60.216:8080';

  const getQuestionDetail = () => {
    axios.get(`${url}/questions/${params.id}`).then((res) => {
      setData(res.data.data);
      setPid(res.data.data.questionId);
      setVotes(res.data.data.votes);
      setLoading(false);
    });
  };

  const getAnswer = () => {
    axios.get(`${url}/questions/${params.id}`).then((res) => {
      setAnswerList(res.data.data.answerList.data);
      setCount(res.data.data.answers);
      console.log(answerList);
      console.log(res.data.data.answerList.data);
      console.log(count);
    });
  };

  useEffect(() => {
    getQuestionDetail();
    getAnswer();
  }, []);

  if (loading) return null;

  const onIncreaseVote = () => {
    let data = {};
    axios
      .post(`${url}/questions/${params.id}/up-vote`, data, {
        headers: { Authorization: localStorage.Authorization },
      })
      .then(() => {
        setVotes(votes + 1);
      });
  };

  const onDecreaseVote = () => {
    axios
      .post(`${url}/questions/${params.id}/down-vote`, data, {
        headers: { Authorization: localStorage.Authorization },
      })
      .then(() => {
        setVotes(votes - 1);
      });
  };
  // const deleteQuestion = () => {
  //   axios
  //     .delete(`${url}/questions/${params.questionId}`, {
  //       headers: { Authorization: getLoginCookie() },
  //     })
  //     .then(() => {
  //       getQuestions();
  //       // navigate('/');
  //     });
  // };

  return (
    <Container>
      <Header />
      <BodyContainer>
        <SidebarLeft />
        <QuestionContainer>
          <div className="question--header">
            <h1>{data.title}</h1>
            <div className="question-header--ask-question-btn">
              <button text={'Ask Question'} type={'blue'} onClick={() => '/create'}>
                Ask Question
              </button>
            </div>
          </div>
          <div className="question--sub-header">
            <span>Asked {data.createdAt}</span>
            <span>Modified {data.lastModifiedAt}</span>
            <span>Viewed {data.views}</span>
          </div>
          <div className="question--main-bar">
            <div className="question__main--post">
              <PostVote
                votes={votes}
                setVotes={setVotes}
                onIncreaseVote={onIncreaseVote}
                onDecreaseVote={onDecreaseVote}
                pid={pid}
              />
              <div className="question__main--post-content">
                <p className="post-content--body">{data.content}</p>
                <div className="post-content--tags">
                  {/* {data.questionTags.map((tag, tagId) => (
                    <div key={tagId} className='tagwrapper'>
                      <div className='tag'>{tag}</div>
                    </div>
                  ))} */}
                </div>
                <div className="post-content--sub-info">
                  <div className="sub-info--controls">
                    <span>Share</span>
                    <span>Edit</span>
                    <span>Follow</span>
                    {/* {state.loginState === true &&
                    parseInt(state.data.memberId) ===
                      parseInt(data.writer.member_id) ? (
                      <>
                        <Link
                          to={`/editquestion/${data.post_id}`}
                          state={{ data: data }}
                        >
                          Edit
                        </Link>
                        <button onClick={deleteQuestion}>Delete</button>
                      </>
                    ) : null} */}
                  </div>
                  <div className="sub-info--writer">
                    <div className="writer-img"></div>
                    <div className="writer-info">
                      <div>Asked {data.createdAt}</div>
                      <div className="writer-name">{data.member.displayName}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="question__main--answer">
              <Answers
                pid={pid}
                answerList={answerList}
                setAnswerList={setAnswerList}
                count={count}
                getAnswerAnswer={getAnswer}
              />
              <div>
                {/* <PostAnswer pid={pid} getAnswerAnswer={getAnswer} /> */}
                <Edit>
                  <h3>Your Answer</h3>
                  <textarea rows="6"></textarea>
                  <div className="btn">
                    <button>Post Your Answer</button>
                  </div>
                </Edit>
              </div>
            </div>
          </div>
          <div className="sideRight">
            <SidebarRight />
          </div>
        </QuestionContainer>
      </BodyContainer>

      <Footer />
    </Container>
  );
};

export default Question;
