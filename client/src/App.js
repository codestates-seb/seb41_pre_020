import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Header';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
