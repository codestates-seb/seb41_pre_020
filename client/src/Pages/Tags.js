import styled from 'styled-components';
import TagFilter from '../components/tag/TagFilter';
import TagList from '../components/tag/TagList';
import TagTab from "../components/tag/TagTab";

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const TabBlock = styled.div`
  margin-bottom: 12px;
  margin-left: auto !important;
`;

const Tags = () => {
    return (
        <Container>
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
                <TabBlock>
                    <TagTab />
                </TabBlock>
            </TopContainer>
            <TagList />
        </Container>
    );
};

export default Tags;