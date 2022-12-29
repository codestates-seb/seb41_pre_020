import styled from 'styled-components';
import TagFilter from '../components/tag/TagFilter';
import TagList from '../components/tag/TagList';
import SidebarLeft from '../components/aside/SidebarLeft';
import Footer from '../components/Footer';
import TagTab from '../components/tag/TagTab';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 1264px;
  width: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  text-align: left;
  flex: 1 0 auto;
`;

const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  height: 100% !important;
  width: calc(100% - 164px);
  background-color: white;
  border-left: 1px solid #d6d9dc;
  padding: 24px;

  & h1 {
    font-size: 27px;
    line-height: 35px;
    color: #232629;
    margin-bottom: 16px;
  }

  & .tags--header-text {
    max-width: 632px;
    margin-bottom: 16px;
    color: #232629;
    font-size: 15px;
    line-height: 19.6px;
  }

  & .tags--header-link {
    margin-bottom: 24px !important;
  }

  & .tags__header--control-container {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    & .tags__header--input {
      position: relative;
      margin-bottom: 12px;
    }

    & .tags__header--tab {
      display: flex;
      margin-bottom: 12px;
      margin-left: auto;
      flex-wrap: wrap;
    }
  }
`;

const Tags = () => {
  return (
    <main>
      <Container>
        <SidebarLeft />
        <Main>
          <h1>Tags</h1>
          <p className="tags--header-text">
            A tag is a keyword or label that categorizes your question with other, similar
            questions. Using the right tags makes it easier for others to find and answer your
            question.
          </p>
          <div className="tags--header-link">
            <a href="https://stackoverflow.com/tags/synonyms" rel="noreferrer" target="_blank">
              Show all tag synonyms
            </a>
          </div>
          <div className="tags__header--control-container">
            <div className="tags__header--input">
              <TagFilter />
            </div>
            <div className="tags__header--tab">
              <TagTab />
            </div>
          </div>
          <TagList />
        </Main>
      </Container>
      <Footer />
    </main>
  );
};

export default Tags;
