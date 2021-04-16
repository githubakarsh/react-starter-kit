import {useState, } from 'react';
import { useHistory } from 'react-router-dom';
import './login.scss';

const LoginPage  =() => {
  const history = useHistory();
  const [pageState, setPageState] = useState({'username': "", "password": "", 'authenticated': false});

  const login = () => {
    if(pageState.username === "admin" && pageState.password === "admin") {
      setPageState({...pageState, authenticated: true});
      history.push('/home');
    }
  }
    return  (
        <div className="login-main">
          <div className="login-title"><h2>Login</h2></div>
          <div><input value={pageState.username} onChange={(e) => setPageState({...pageState, username: e.target.value})} placeholder="user name"/></div>
          <div><input value={pageState.password} onChange={(e) => setPageState({...pageState, password: e.target.value})} placeholder="password"/></div>
          <div class="login-button-container"><button onClick={(e) => login()}>Login</button></div>
        </div>
      );
}

export default LoginPage;
