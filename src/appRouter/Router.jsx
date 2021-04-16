import { Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginPage from '../pages/Login';

const Router = ({
    authed
}) => {
    return <Switch>
        <Route component={<LoginPage />} path="/login"/>
        <AuthenticatedRoute component={() => <div>Home</div>} path="/" exact authed={authed}/>
        <AuthenticatedRoute component={() => <div>About us</div>} path="/aboutus" authed={authed}/>
        <AuthenticatedRoute component={() => <div>Contact us</div>} path="/contactus" authed={authed}/>
        <AuthenticatedRoute component={() => <div>the Page you are looking does not exists</div>} authed={authed}/>
    </Switch>
}

export default Router;
