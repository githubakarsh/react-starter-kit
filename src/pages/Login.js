import {useState} from 'react';

const LoginPage  =() => {
  const [pageState, setPageState] = useState({'username': "", "password": "", 'authenticated': false});

  const login = () => {
    if(pageState.username === "admin" && pageState.password === "admin") {
      setPageState({...pageState, authenticated: true})
    }
  }
    return  (<div>
        <form onSubmit={(e) => login()}>
          <div><input value={pageState.username} onChange={(e) => setPageState({...pageState, username: e.target.value})} placeholder="user name"/></div>
          <div><input value={pageState.password} onChange={(e) => setPageState({...pageState, password: e.target.value})} placeholder="password"/></div>
          <button>Login</button>
        </form>
      </div>);
}

export default LoginPage;
