import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPost = styled.div`
  .posts {
    padding: 15px 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    border-top: 1px solid #d2d2d2;
  }
  .stats {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: 13px;
  }
  .stats-container {
    width: 12%;
    color: #6a737c;
    margin-left: 20px;
    font-size: 13px;
  }
  .vote {
    padding: 0;
    margin-bottom: 8px;
    text-align: center;
    display: flex;
    .vote-count {
      font-size: 13px;
      margin-right: 2px;
    }
    .count-text2 {
      color: gray;
    }
    .count-text {
      font-size: 13px;
      color: #f48225;
    }
  }
  .answer {
    border: 2px solid #63b47c;
    background-color: #63b47c;
    color: white;
    border-radius: 3px;
    padding: 4px;
    .vote-count {
      color: white;
      font-size: 15px;
      padding: 1px;
    }
    .count-text {
      color: white;
      font-size: 12px;
      padding: 1px;
    }
  }
  .vote {
    padding: 0;
    margin-bottom: 8px;
    text-align: center;
    display: flex;
    .vote-count {
      font-size: 15px;
      margin-right: 2px;
    }
    .count-text {
      font-size: 15px;
    }
    .views {
      .count-text {
        font-size: 15px;
        color: #f48225;
      }
    }
  }
  .summary {
    margin-left: 30px;
    width: 80%;

    .title {
      font-size: 17px;
      color: #0074cc;
      padding-bottom: 6px;
    }
    .link {
      color: #257ed8;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      text-decoration: none;
    }
    .link:hover {
      color: #87c6fe;
    }
    h3 {
      font-weight: 400;
      font-size: 15px;
      line-height: 1.4;
      margin-bottom: 7.5px;
    }
  }
  .content {
    color: #3b4045;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .right-bottom {
    display: flex;
    justify-content: space-between;
    .userinfo {
      font-size: 14px;
      .username {
        color: #257ed8;
      }
      .date {
        color: #4c5155;
      }
    }
  }
  .tags {
    display: flex;
    justify-content: flex-start;
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
      padding: 0 3px;
      margin: 4px 0px 4px 0px;
      font-size: 12px;
      width: auto;
      border-radius: 3px;
      background-color: transparent;
      white-space: nowrap;
      color: #39739d;
    }
  }
`;

const QuestionItem = ({ posts }) => {
  return (
    <StyledPost>
      <div className='posts'>
        <div className='stats-container'>
          <div className='stats'>
            <div className='vote'>{posts.votes} votes</div>
            <div className='vote'>
              <div className='count-text2'>{posts.answers} answers</div>
            </div>
            <div className='vote'>
              <div className='count-text2'>{posts.views} views</div>
            </div>
          </div>
        </div>
        <div className='summary'>
          <div>
            <Link to={`/question/${posts.questionId}`} className='title'>
              {posts.title}
            </Link>
            <div className='content'>{posts.content}</div>
            <div className='right-bottom'>
              <div className='tags'>
                {posts.questionTags.map((tag, tagId) => (
                  <div key={tagId} className='tagwrapper'>
                    <span className='tag'>{tag.tagName}</span>
                  </div>
                ))}
              </div>
              <div className='userinfo'>
                <span className='username'>{posts.member.displayName}</span>
                <span className='date'> asked {posts.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPost>
  );
};

export default QuestionItem;
