import ubuntu from '../image/askubuntu.png';
import mathoverflow from '../image/mathoverflow.png';
import serverfault from '../image/serverfault.png';
import stackapps from '../image/stackapps.png';
import stackexchange from '../image/stackexchange.png';
import stackoverflow from '../image/stackoverflow.png';
import superuser from '../image/superuser.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../Util/Redux';
import styled from "styled-components";

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
  > div.logout_guide {
    font-size: 24px;
    font-weight: 400;
    margin: 20px;
    text-align: center;
  }
`;

const LogoutBlock = styled.div`
  margin: 10px;
  width: 320px;
  height: 430px;
  padding: 24px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  > div.linked_site > a {
    color: hsl(206, 100%, 40%);
    font-size: 15px;
    margin: 2px;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    text-decoration-line: none;
  }
  > div#checkbox {
    font-size: 13px;
    padding: 2px 0px 0px;
    font-weight: 400;
    margin: 20px 0px;
    > span {
      margin-left: 5px;
      font-weight: 500;
    }
  }
  > div#buttons {
    > button#logout_button {
      margin-top: 15px;
      width: 80px;
      height: 50px;
      margin: 2px;
      padding: 10px;
      background-color: #0a95ff;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      color: white;
      cursor: pointer;
      :hover {
        background-color: #0074cc;
      }
    }
    > button#cancel_button {
      margin-top: 15px;
      width: 80px;
      height: 50px;
      margin: 2px;
      padding: 10px;
      background-color: white;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      color: #0a95ff;
      cursor: pointer;
      :hover {
        background-color: hsl(205, 46%, 92%);
      }
    }
  }
  > div#logout_all_device_text {
    font-size: 12px;
    margin: 30px 0px 0px 0px;
    padding: 0px;
    color: #6a737c;
    font-weight: 600;
  }
`;

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        dispatch(logoutAction());
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('googleAccessToken');
        localStorage.removeItem('googleRefreshToken');
        localStorage.removeItem('displayname');

        navigate('/');
    };

    const handleCancelClick = () => {
        navigate('/');
    };

    return (
        <Container>
            <div className="logout_guide">
                Clicking “Log out” will log you out of the following <br></br>domains on
                this device:
            </div>
            <LogoutBlock>
                <div className="linked_site">
                    <Logo src={ubuntu}/>
                    <a href="https://askubuntu.com/">askubuntu.com</a>
                </div>
                <div className="linked_site">
                    <Logo src={mathoverflow}/>
                    <a href="https://mathoverflow.net/">mathoverflow.net</a>
                </div>
                <div className="linked_site">
                    <Logo src={serverfault}/>
                    <a href="https://serverfault.com/">serverfault.com</a>
                </div>
                <div className="linked_site">
                    <Logo src={stackapps}/>
                    <a href="https://stackapps.com/">stackapp.com</a>
                </div>
                <div className="linked_site">
                    <Logo src={stackexchange}/>
                    <a href="https://stackexchange.com/">stackexchange.com</a>
                </div>
                <div className="linked_site">
                    <Logo src={stackoverflow}/>
                    <a href="https://stackoverflow.com/">stackoverflow.com</a>
                </div>
                <div className="linked_site">
                    <Logo src={superuser}/>
                    <a href="https://superuser.com/">superuser.com</a>
                </div>
                <br/>
                <hr></hr>
                <div id="checkbox">
                    <input type={'checkbox'}></input>
                    <span>Log out on all devices</span>
                </div>
                <div id="buttons">
                    <button id="logout_button" onClick={handleLogoutClick}>
                        Log out
                    </button>
                    <button id="cancel_button" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
                <div id="logout_all_device_text">
                    If you’re on a shared computer, remember to
                    <br/>
                    log out of your Open ID provider (Facebook,
                    <br/>
                    Google, Stack Exchange, etc.) as well.
                </div>
            </LogoutBlock>
        </Container>
    );
}