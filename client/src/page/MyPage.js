import SidebarLeft from '../component/aside/SidebarLeft';
import Profile from '../component/mypage/Profile';
import Activity from '../component/mypage/Activity';
import Settings from '../component/mypage/Settings';
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
