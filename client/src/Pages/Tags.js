import styled from 'styled-components';
import TagFilter from '../components/tag/TagFilter';
import TagList from '../components/tag/TagList';
import SidebarLeft from "../components/aside/SidebarLeft";
import Footer from "../components/Footer";

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
`;

const Headline = styled.div`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 13px;
  margin-bottom: 16px;
  line-height: 1.3rem;
  max-width: 35rem;
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputBlock = styled.div`
  margin-bottom: 12px;
`;

const Tags = () => {
    return (
        <main>
            <Container>
                <SidebarLeft />
                <Main>
                    <Headline>Tags</Headline>
                    <Paragraph>
                        A tag is a keyword or label that categorizes your question with other,
                        similar questions. Using the right tags makes it easier for others to
                        find and answer your question.
                    </Paragraph>
                    <TopContainer>
                        <InputBlock>
                            <TagFilter />
                        </InputBlock>
                    </TopContainer>
                    <TagList />
                </Main>
            </Container>
            <Footer />
        </main>
    )
};

export default Tags;