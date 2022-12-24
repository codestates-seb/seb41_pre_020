import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import AskQuestion from "./Pages/AskQuestion";
import MyPage from "./Pages/MyPage";
import Footer from "./Footer";
import Tags from "./Pages/Tags";
import Users from "./Pages/Users";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #f3f3f3;
     background-color: #f1f2f3;
    background: white; */
  margin: 0 auto;
  margin-top: 50px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/question" element={<Question />} />
            <Route path="/create" element={<AskQuestion />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </AppContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
