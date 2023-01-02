import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Home from './page/Home';
import Question from './page/Question';
import AskQuestion from './page/AskQuestion';
import MyPage from './page/MyPage';
import Tags from './page/Tags';
import Users from './page/Users';
import Logout from './page/Logout';
import EditAnswer from './page/EditAnswer';
import EditQuestion from './page/EditQuestion';

function App() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestion();
  }, []);
  const getQuestion = () => {
    axios
      .get(`http://43.201.60.216:8080/questions?page=1&size=15&sort=votes`)
      .then((res) => {
        setLists(res.data.data);
        setLoading(false);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* {login ? <LoginedHeader setLogin={setLogin} /> : <Header setLogin={setLogin} />} */}
        {/* <Header /> */}
        <Route path='/' element={<Home lists={lists} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/question/:id'
          element={<Question lists={lists} getQuestion={getQuestion} />}
        />
        <Route path='/create' element={<AskQuestion />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/users' element={<Users />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/edit-answer' element={<EditAnswer />} />
        <Route path='/edit' element={<EditQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
