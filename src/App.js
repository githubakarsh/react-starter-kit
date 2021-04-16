
import Router from './appRouter/Router';
import TopNavbar from './components/topNavbar/TopNavBar';
import {useState} from 'react';

const App = () => {
  return (
    <div >
      <TopNavbar authed={true}/>
      <Router authed={true}/>
    </div>
  );
}

export default App;
