import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Header';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Question from './Pages/Question';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Question />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/question' element={<Question />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
