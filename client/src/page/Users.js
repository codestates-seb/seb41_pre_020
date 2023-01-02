import styled from 'styled-components';
import UserFilter from '../component/users/UserFilter';
import UserTab from '../component/users/UserTab';
import UserSubTab from '../component/users/UserSubTab';
import UserList from '../component/users/UserList';
import Footer from '../component/Footer';
import SidebarLeft from '../component/aside/SidebarLeft';
import Header from '../component/Header';

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
    margin-bottom: 24px;
  }

  & .users--header-container {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    & .users__header--input {
      position: relative;
      margin-bottom: 12px;
    }

    & .users__header--tab {
      display: flex;
      margin-bottom: 12px;
      margin-left: auto;
      flex-wrap: wrap;
    }
  }
`;

const SubContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

const Users = () => {
  return (
    <main>
      <Container>
        <Header />
        <SidebarLeft />
        <Main>
          <h1>Users</h1>
          <div className='users--header-container'>
            <div className='users__header--input'>
              <UserFilter />
            </div>
            <div className='users__header--tab'>
              <UserTab />
            </div>
          </div>
          <SubContainer>
            <UserSubTab />
          </SubContainer>
          <UserList />
        </Main>
      </Container>
      <Footer />
    </main>
  );
};

export default Users;
