import { LoginPage , RegisterPage } from './page/';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path={["/", "/inicio", "/home" , "/login"]}>
    <LoginPage />
    </Route>
    <Route exact path={["/register", "/registrar"]}>
            <RegisterPage />
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
