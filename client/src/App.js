import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Header';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Question from './Pages/Question';
import AskQuestion from './Pages/AskQuestion';

function App() {
  return (
    <BrowserRouter>
      {/* <header /> */}
      <AskQuestion />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/question' element={<Question />} />
          <Route path='/create' element={<AskQuestion />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
