import SidebarLeft from "../components/aside/SidebarLeft";
import SidebarRight from '../components/aside/SidebarRight';
import styled from "styled-components";
import Footer from "../components/Footer";
// import List from "../components/home/List";
import Main from "../components/home/Main";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

const FooterContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
        <MainContainer>
            <SidebarLeft />
            {/*<List />*/}
            <Main />
             {/*<SidebarRight />*/}
        </MainContainer>
        <FooterContainer>
            <Footer />
        </FooterContainer>
    </HomeContainer>
  );
};

export default Home;
