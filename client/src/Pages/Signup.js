import SignupText from '../components/signup/SignupText';

function Signup() {
  return (
    <div>
      <SignupText />
      <div>
        <span>Display name</span>
        <input></input>
      </div>
      <div>
        <span>Email</span>
        <input></input>
      </div>
      <div>
        <span>Password</span>
        <input></input>
      </div>
      <button type='submit'>Sign up</button>
    </div>
  );
}

export default Signup;
