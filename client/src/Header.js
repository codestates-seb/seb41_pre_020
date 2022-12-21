import { IconLogo, IconSearch } from '@stackoverflow/stacks-icons';
import { Icon } from './Util/convertor';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Header = () => {
  // const [isLogin, setIsLogin] = useState(false);

  // const onClick = () => {
  //   setIsLogin(!isLogin);
  // };

  // const LoggedInGNB = () => {
  //   return (
  //     <div>
  //       <button>
  //         <Link to='/'>Log out</Link>
  //       </button>
  //       <div>{/* <img src={}></img> */}</div>
  //     </div>
  //   );
  // };

  // const LoggedOutGNB = () => {
  //   return (
  //     <>
  //       <button>
  //         <Link to='/login'>Log in</Link>
  //       </button>
  //       <button>
  //         <Link to='/signup'>Sign up</Link>
  //       </button>
  //     </>
  //   );
  // };

  return (
    <div>
      <div>
        <div>{Icon(IconLogo)}</div>
        <div>{Icon(IconSearch)}</div>
        <input type='text' placeholder='Search...' />
      </div>
      {/* <button onClick={onClick}>Log in</button> */}
      {/* <div>{isLogin ? <LoggedInGNB /> : <LoggedOutGNB />}</div> */}
    </div>
  );
};

export default Header;
