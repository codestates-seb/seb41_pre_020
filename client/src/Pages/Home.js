import SidebarLeft from '../components/aside/SidebarLeft';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Main from '../components/home/Main';
import { BodyContainer } from '../components/BodyContainer';

const FooterContainer = styled.div``;

const Home = () => {
  return (
    <main>
      <BodyContainer>
        <SidebarLeft />
        <Main />
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </main>
  );
};

export default Home;
