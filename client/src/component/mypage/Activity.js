import { Link } from 'react-router-dom';

const Activity = () => {
  return (
    <div>
      <Link to={`/mypage/activity`}>
        <button>Activity</button>
      </Link>
      <Link to={`/mypage/settings`}>
        <button>Settings</button>
      </Link>
    </div>
  );
};

export default Activity;
