import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import { PrivateRoute } from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/routing/PrivateScreen";
import LoginScreen from "./components/routing/LoginScreen";
import RegisterScreen from "./components/routing/RegisterScreen";
import ForgotPasswordScreen from "./components/routing/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/routing/ResetPasswordScreen";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <PrivateRoute exact path="/" component={privateScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
                    <Route
                        exact
                        path="/passwordreset/:resetToken"
                        component={ResetPasswordScreen}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
