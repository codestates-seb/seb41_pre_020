import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import SidebarLeft from "../components/aside/SidebarLeft";
// import QnA from "../components/QnA/QnA";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

function Question() {
  return (
      <Main>
        <Section>
          <SidebarLeft />
          {/* <QnA /> */}
        </Section>
        <Footer />
      </Main>
  );
}

export default Question;