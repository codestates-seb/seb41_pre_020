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

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .quesitonBox {
    display: flex;
    flex-direction: column;
    margin: 30px;
    .top {
      display: flex;
      flex-direction: column;
      // width: 1070px;
      border-bottom: 1px solid lightgray;
      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        h1 {
          font-weight: 500;
          font-size: 27px;
          color: #3b4045;
          line-height: 1.35;
        }
      }
      .info {
        width: auto;
        margin-bottom: 10px;
        margin-left: 3px;
        span {
          margin-right: 15px;
          font-size: 13px;
          color: #6a737c;
        }
      }
    }
    .bottom {
      display: flex;
      align-items: flex-start;
      .sideRight {
        margin-top: 30px;
      }
      .content {
        padding: 20px;
        width: 100%;
        min-height: 100px;
        .content-top {
          display: flex;
        }
        .content-top {
          padding: 5px;
          p {
            margin: 10px;
            font-size: 15px;
          }
        }
        .tags {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
          margin-bottom: 20px;
          .tagwrapper {
            cursor: pointer;
            margin-right: 5px;
            display: flex;
            padding-left: 5px;
            padding-right: 5px;
            border-radius: 3px;
            list-style: none;
            background-color: #e1ecf4;
          }
          .tagwrapper:hover {
            background-color: #d0e3f1;
          }
          .tag {
            border: none;
            padding: 3px;
            font-size: 13px;
            height: 23px;
            border-radius: 3px;
            background-color: transparent;
            white-space: nowrap;
            color: #39739d;
          }
        }
      }
      .content-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        .userinfo {
          border-radius: 5px;
          padding: 10px;
          background-color: #d9eaf7;
        }
        button {
          background-color: transparent;
          border: none;
          color: gray;
          margin-right: 7px;
          cursor: pointer;
        }
        a {
          text-decoration: none;
          color: gray;
          margin-right: 7px;
          cursor: pointer;
        }
        .name {
          color: #0a95ff;
          margin-left: 5px;
          cursor: pointer;
        }
      }
    }
  }
  .answerBox {
    margin-left: 30px;
  }

  .askButton {
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
    }
  }
`;

const Edit = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
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
    justify-content: flex-end;
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
        <Detail>
          <div className='quesitonBox'>
            <div className='top'>
              <div className='title'>
                <h1>{data.title}</h1>
                <button
                  className='askButton'
                  text={'Ask Question'}
                  type={'blue'}
                  onClick={() => '/create'}
                >
                  Ask Question
                </button>
              </div>
              <div className='info'>
                <span>Asked {data.createdAt}</span>
                <span>Modified {data.lastModifiedAt}</span>
                <span>Viewed {data.views}</span>
              </div>
            </div>
            <div className='bottom'>
              <div className='content'>
                <div className='content-top'>
                  <PostVote
                    votes={votes}
                    setVotes={setVotes}
                    onIncreaseVote={onIncreaseVote}
                    onDecreaseVote={onDecreaseVote}
                    pid={pid}
                  />
                  <p>질문내용 {data.content}</p>
                </div>
                <div className='content-bottom'>
                  <div className='tags'>
                    {/* {data.questionTags.map((tag, tagId) => (
                    <div key={tagId} className='tagwrapper'>
                      <div className='tag'>{tag}</div>
                    </div>
                  ))} */}
                  </div>
                  <div className='content-bottom'>
                    <div className='btns'>
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
                    <div className='userinfo'>
                      <span>Asked </span>
                      <br />
                      <span>{data.createdAt}</span>
                      <span className='name'>{data.member.displayName}</span>
                    </div>
                  </div>
                </div>
                <div className='answerBox'>
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
                      <textarea rows='6'></textarea>
                      <div className='btn'>
                        <button>Post Your Answer</button>
                      </div>
                    </Edit>
                  </div>
                </div>
              </div>
              <div className='sideRight'>
                <SidebarRight />
              </div>
            </div>
          </div>
        </Detail>
      </BodyContainer>

      <Footer />
    </Container>
  );
};

export default Question;
