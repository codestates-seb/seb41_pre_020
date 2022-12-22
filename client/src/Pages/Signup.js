import SignupText from '../components/signup/SignupText';
import './Signup.css';

function Signup() {
  const signupHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={signupHandler}>
      <SignupText />
      <div className='signupInputWrap'>
        <div className='signupInputBox'>
          <div className='signupForm'>
            <div className='signupItem'>
              <label htmlFor='username'>Display name</label>
              <input id='username' type='text'></input>
            </div>
            <div className='signupItem'>
              <label htmlFor='email'>Email</label>
              <input id='email' type='email'></input>
            </div>
            <div className='signupItem'>
              <label htmlFor='password'>Password</label>
              <input id='password' type='text'></input>
            </div>
          </div>
          <button type='submit'>Sign up</button>
        </div>
        <div className='signupInputLogin'>
          <span>Already have an account?</span>
          <span>Log in</span>
        </div>
      </div>
    </form>
  );
}

export default Signup;
