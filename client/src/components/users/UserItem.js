import styled from 'styled-components';

const GridItem = styled.div`
  padding: 5px 6px 7px 7px;
  overflow: hidden;
  color: #6a737c;
`;

const Image = styled.img`
  float: left;
  width: 48px;
  height: 48px;
  border-radius: 3px;
`;

const UserDetails = styled.div`
  margin-left: 9px;
  width: calc(100% - 64px);
  float: left;
  word-wrap: break-word;
`;

const UserName = styled.div`
  color: #0074cc;
  font-size: 15px;
  line-height: 19.5px;
`;

const UserLocation = styled.div`
  margin-bottom: 2px;
  color: #6a737c;
  font-size: 12px;
  line-height: 15.6px;
`;

const UserReputation = styled.div`
  margin-bottom: 4px;
  color: #6a737c;
  font-size: 12px;
  line-height: 15.6px;
  font-weight: bold;
`;

const UserTags = styled.div`
  margin-left: 57px;
  color: #0074cc;
  font-size: 12px;
  line-height: 15.6px;
  font-size: 12px;
`;

const UserItem = ({ user }) => {
  const { name, picture, reputation, location, lang } = user;
  const [tag1, tag2, tag3] = lang;

  return (
    <GridItem>
      <Image src={picture} alt="profile"></Image>
      <UserDetails>
        <UserName>{name}</UserName>
        <UserLocation>{location}</UserLocation>
        <UserReputation>{reputation}k</UserReputation>
      </UserDetails>
      <UserTags>
        {tag1}, {tag2}, {tag3}
      </UserTags>
    </GridItem>
  );
};

export default UserItem;
