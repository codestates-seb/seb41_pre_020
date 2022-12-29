
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Question from './Pages/Question';
import AskQuestion from './Pages/AskQuestion';
import MyPage from './Pages/MyPage';
import Tags from './Pages/Tags';
import Users from './Pages/Users';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import Header from './components/Header';
import LoginedHeader from './components/LoginedHeader';
import Logout from "./Pages/Logout";
import EditAnswer from './Pages/EditAnswer';

const queryClient = new QueryClient();


function App() {
  const [login, setLogin] = useState(localStorage.getItem('login-token'));
  const [ref, setRef] = useState(false);

  const refresh = () => {
    axios
      .post(
        `/api/members/refresh`,
        {},
        {
          headers: {
            Refresh: `${localStorage.getItem('login-refresh')}`,
          },
        }
      )
      .then((res) => {
        if (res.headers.authorization) {
          localStorage.setItem('login-token', `Bearer ${res.headers.authorization}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    if (login) {
      setTimeout(() => {
        refresh();
        setRef(!ref);
      }, 540000);
    }
  }, [login, ref]);

  return (
    <QueryClientProvider client={queryClient}>
      {login ? <LoginedHeader setLogin={setLogin} /> : <Header setLogin={setLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<Question />} />
        <Route path="/create" element={<AskQuestion />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/edit-answer" element={<EditAnswer />} />
      </Routes>
    </QueryClientProvider>

  );
}

export default App;
