
import Router from './appRouter/Router';
import TopNavbar from './components/topNavbar/TopNavBar';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';


const App = (authed) => {
  const appContext = useContext(AppContext);
  console.log(appContext, "here in app");
  return (
     <div>
        <TopNavbar authed={authed}/>
      <Router authed={authed}/>
        </div>
  );
}

export default App;
