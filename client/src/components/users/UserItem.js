import styled from 'styled-components';

const Card = styled.div`
  padding: 5px 6px 7px 7px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: hsl(210, 8%, 45%);
`;

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 2px;
  float: left;
`;

const UserContainer = styled.div`
  margin-left: 9px;
  width: calc(100% - 64px);
  float: left;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.3;
`;

const UserName = styled.div`
  font-size: 14px;
  color: hsl(206, 100%, 40%);
`;

const Location = styled.div`
  margin-bottom: 2px;
`;

const Reputation = styled.div`
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: bold;
`;

const TagsBlock = styled.div`
  margin-left: 57px;
  display: flex;
  text-align: left;
  color: hsl(206, 100%, 40%);
  font-size: 12px;
`;

const UserItem = ({ user }) => {
    const { name, picture, reputation, location, lang } = user;
    const [tag1, tag2, tag3] = lang;

    return (
        <Card>
            <Container>
                <Image src={picture} alt="profile"></Image>
                <UserContainer>
                    <UserName>{name}</UserName>
                    <Location>{location}</Location>
                    <Reputation>{reputation}</Reputation>
                </UserContainer>
            </Container>
            <TagsBlock>
                <div>
                    {tag1}, {tag2}, {tag3}
                </div>
            </TagsBlock>
        </Card>
    );
};

export default UserItem;