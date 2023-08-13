import React from 'react';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import theme from "./chakra.config";
import { RegisterPage, LoginPage, HomePage } from './page/';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <CSSReset /> 
        <div className="App">
          <Switch>
            <Route exact path={["/", "/inicio", "/home"]}>
              <Helmet>
                <title>Illusion Squad | Início</title>
              </Helmet>
              <HomePage />
            </Route>
            <Route exact path={["/login", "/logar"]}>
              <LoginPage />
            </Route>
            <Route exact path={["/register", "/registrar"]}>
              <RegisterPage />
            </Route>
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
