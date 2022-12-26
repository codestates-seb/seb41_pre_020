import styled from 'styled-components';

const Card = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 3px;
`;

const TagBlock = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TagName = styled.div`
  font-size: 12px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-color: transparent;
  padding: 5px 6px;
  line-height: 1;
  border-radius: 3px;
`;

const InfoBlock = styled.div`
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
`;

const CountBlock = styled.div`
  display: flex;
  justify-content: space-between;
  color: hsl(210, 8%, 55%);
  font-size: 11px;
`;

const Questions = styled.div``;

const TagItem = ({ tag }) => {
    const { name, info, count } = tag;

    return (
        <Card>
            <TagBlock>
                <TagName>{name}</TagName>
            </TagBlock>
            <InfoBlock>{info}</InfoBlock>
            <CountBlock>
                <Questions>{count} questions</Questions>
            </CountBlock>
        </Card>
    );
};

export default TagItem;