import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPost = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #d6d9dc;
  padding: 16px;

  .question--stats-container {
    gap: 6px;
    margin-right: 16px;
    margin-bottom: 4px;
    width: 108px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: flex-end;
    color: #6a737c;

    & .question--stats-item {
      display: inline-flex;
      gap: 0.3em;
      align-items: center;
      justify-content: center;
      white-space: nowrap;

      & span {
        color: #6a737c;
      }

      &.stats--vote span {
        color: #0c0d0e;
      }
    }
  }

  .question--summary-container {
    flex-grow: 1;
    max-width: 100%;

    & .title {
      font-size: 17px;
      color: #0074cc;
      line-height: 22.2px;
      padding-bottom: 5px !important;
      padding-right: 24px;

      &:hover {
        color: #0a95ff;
      }
    }

    & .question-summary--content {
      margin-bottom: 8px;
      color: #3b4045;
      margin-bottom: 8px;
    }

    & .question-summary--meta-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      /* flex-direction: column; */
      column-gap: 6px;
      row-gap: 8px;

      & .question-summary--meta-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 13px;

        & .question-summary--meta-tag-item {
          font-size: 12px;
          color: #39739d;
          background-color: #e1ecf4;
          padding: 0.4em 0.5em;
          line-height: 12px;
          border-radius: 3px;

          &:hover {
            background-color: #d0e3f1;
            color: #2c5877;
          }
        }
      }

      & .question--sumary--meta-userinfo {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        gap: 4px;

        & .question-summary--meta-userinfo-item {
          &.meta--username {
            color: #0074cc;

            &:hover {
              color: #0a95ff;
            }
          }

          &.meta--date {
            color: #6a737c;
          }
        }
      }
    }
  }
`;

const QuestionItem = ({ posts }) => {
  return (
    <StyledPost>
      <div className="question--stats-container">
        <div className="question--stats-item stats--vote">
          <span>{posts.votes}</span>
          <span>votes</span>
        </div>
        <div className="question--stats-item">
          <span>{posts.answers}</span>
          <span>answers</span>
        </div>
        <div className="question--stats-item">
          <span>{posts.views}</span>
          <span>views</span>
        </div>
      </div>
      <div className="question--summary-container">
        <Link to={`/question/${posts.questionId}`} className="title">
          {posts.title}
        </Link>
        <div className="question-summary--content">{posts.content}</div>
        <div className="question-summary--meta-container">
          <div className="question-summary--meta-tags">
            {posts.questionTags.map((tag, tagId) => (
              <div key={tagId} className="question-summary--meta-tag-item">
                {tag.tagName}
              </div>
            ))}
          </div>
          <div className="question--sumary--meta-userinfo">
            <span className="question-summary--meta-userinfo-item meta--username">
              {posts.member.displayName}
            </span>
            <span className="question-summary--meta-userinfo-item meta--date">
              {' '}
              asked {posts.createdAt}
            </span>
          </div>
        </div>
      </div>
    </StyledPost>
  );
};

export default QuestionItem;
