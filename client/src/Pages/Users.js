import styled from 'styled-components';
import UserFilter from "../components/users/UserFilter";
import UserTab from "../components/users/UserTab";
import UserSubTab from "../components/users/UserSubTab";
import UserList from "../components/users/UserList";
import Footer from "../components/Footer";
import SidebarLeft from "../components/aside/SidebarLeft";

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
  margin-bottom: 24px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SubContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

const InputBlock = styled.div`
  margin-bottom: 12px;
`;

const TabBlock = styled.div`
  margin-bottom: 12px;
  margin-left: auto !important;
`;

const Users = () => {
    return (
        <main>
            <Container>
                <SidebarLeft />
                <Main>
                    <Headline>Users</Headline>
                    <TopContainer>
                        <InputBlock>
                            <UserFilter />
                        </InputBlock>
                        <TabBlock>
                            <UserTab />
                        </TabBlock>
                    </TopContainer>
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