import { Switch, Route } from 'react-router-dom';

const Router = () => {
    return <Switch>
        <Route component={() => <div>Home</div>} path="/" exact/>
        <Route component={() => <div>About us</div>} path="/aboutus"/>
        <Route component={() => <div>Contact us</div>} path="/contactus"/>
        <Route component={() => <div>the Page you are looking does not exists</div>} />
    </Switch>
}

export default Router;
