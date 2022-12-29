import SidebarLeft from '../components/aside/SidebarLeft';
import Footer from '../components/Footer';
import Main from '../components/home/Main';
import { BodyContainer } from '../components/BodyContainer';

const Home = () => {
  return (
    <main>
      <BodyContainer>
        <SidebarLeft />
        <Main />
      </BodyContainer>
      <Footer />
    </main>
  );
};

export default Home;
