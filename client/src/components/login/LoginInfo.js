const LoginInfo = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            <span>Email</span>
            <input type='Email'></input>
          </div>
          <div>
            <span>Password</span>
            <a href='/'>Forgot password?</a>
            <input type='password'></input>
          </div>
          <button>Log in</button>
        </form>
      </div>
      <div>
        <p>{`Don't have an account?`}</p>
        <a href='/'>Sign up</a>
      </div>
    </div>
  );
};

export default LoginInfo;
