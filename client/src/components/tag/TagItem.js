import styled from 'styled-components';

const GridItem = styled.div`
  padding: 12px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
`;

const TagBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Tag = styled.div`
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
`;

const TagInfo = styled.div`
  margin-bottom: 12px;
  color: #3b4045;
  overflow: hidden;
`;

const QuestionCount = styled.div`
  color: #838c95;
  font-size: 12px;
  line-height: 15.6px;
`;

const TagItem = ({ tag }) => {
  const { name, info, count } = tag;

  return (
    <GridItem>
      <TagBlock>
        <Tag>{name}</Tag>
      </TagBlock>
      <TagInfo>{info}</TagInfo>
      <QuestionCount>{count} questions</QuestionCount>
    </GridItem>
  );
};

export default TagItem;
