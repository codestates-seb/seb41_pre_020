import SidebarLeft from '../components/aside/SidebarLeft';
import Profile from '../components/mypage/Profile';
import Activity from '../components/mypage/Activity';
import Settings from '../components/mypage/Settings';
import { Route, Routes } from 'react-router-dom';

const MyPage = () => {
  return (
    <div>
      <div>
        <nav>
          <SidebarLeft />
        </nav>
      </div>
      <div>
        <div>
          <Profile />
          <Routes>
            <Route exact path='/' element={<Activity />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
