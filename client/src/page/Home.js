import SidebarLeft from '../component/aside/SidebarLeft';
import Footer from '../component/Footer';
import Main from '../component/home/Main';
import { BodyContainer } from '../component/BodyContainer';
import Header from '../component/Header';

const Home = ({ lists }) => {
  return (
    <main>
      <Header />
      <BodyContainer>
        <SidebarLeft />
        <Main lists={lists} />
      </BodyContainer>
      <Footer />
    </main>
  );
};

export default Home;
