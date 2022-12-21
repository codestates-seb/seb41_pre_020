import { IconLogoGlyphMd } from '@stackoverflow/stacks-icons';
import { Icon } from '../Util/convertor';
import LoginInfo from '../components/login/LoginInfo';
const Login = () => {
  return (
    <div>
      <div>
        <div>{Icon(IconLogoGlyphMd)}</div>
        <LoginInfo />
      </div>
    </div>
  );
};
export default Login;
