import Main from "../components/home/Main";
import SidebarLeft from "../components/aside/SidebarLeft";
// import SidebarRight from '../components/aside/SidebarRight';
import { BodyContainer } from "../components/BodyContainer";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  margin-top: 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <SidebarLeft />
      <BodyContainer>
        <Main />
        {/* <SidebarRight /> */}
      </BodyContainer>
    </HomeContainer>
  );
};

export default Home;
