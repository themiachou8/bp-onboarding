import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className = 'SmallerBox'>
        <header className='Welcome'>
          Welcome Back!
        </header>
        <p className = 'Sign-in'>
          Sign in to continue
        </p>
        <div className = 'emailBox'>
          <p className = 'smallBox'>Email </p>
          <input type='text' className = 'input' value="thisisanemail@email.com"></input>
        </div>
        <div className = 'emailBox'>
          <p className = 'smallBox'>Password </p>
          <input type='text' className = 'input' value="Create Password"></input>
        </div>
        <div className = 'bottom-row'>
          <p className = 'text'>
            Haven't activated your account yet? Activate now
          </p>
          <button className='sign-in'>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
