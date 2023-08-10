import { RegisterPage , LoginPage , HomePage } from './page/';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path={["/", "/inicio", "/home"]}>
            <Helmet>
              <title>Illusion Squad | Início</title>
            </Helmet>
              <HomePage />
          </Route>
      <Route exact path={["/login" , "/logar"]}>
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
