import React from 'react';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import theme from "./chakra.config";
import { RegisterPage, LoginPage, HomePage, NotFoundPage , GitHubCommits} from './page/';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <div className="App">
          <Switch>
            <Route exact path={["/", "/inicio", "/home"]}>
              <Helmet>
                <title>DEBVER | Home</title>
              </Helmet>
              <HomePage />
            </Route>
            <Route exact path={["/login", "/logar"]}>
              <Helmet>
                <title>DEBVER | Login</title>
              </Helmet>
              <LoginPage />
            </Route>
            <Route exact path={["/register", "/registrar"]}>
              <Helmet>
                <title>DEBVER | Registra-se</title>
              </Helmet>
              <RegisterPage />
            </Route>
            <Route exact path={["/dev/logs"]}>
            <Helmet>
              <title>DEBVER | DEV | LOGS</title>
            </Helmet>
            <GitHubCommits />
            </Route>
            <Route path="/404">
              <Helmet>
                <title>DEBVER | Página não encontrada</title>
              </Helmet>
              <NotFoundPage />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
 