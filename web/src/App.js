import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import BackgroundImage from "./BackgroundImage";
import Date from './Date'
import Settings from './Settings'
import { LanguageProvider } from './Language/Language';
import TaskListContextProvider from './Tasks/TaskListContext'
import BackgroundContextProvider from './BackgroundContext';

export default function App() {
  return (
    <BackgroundContextProvider>
      <LanguageProvider>
        <TaskListContextProvider>
          <Router>
            <div className='app'>
              <Nav />
              <main className='main'>
                <BackgroundImage />
                <Switch>
                  <Route path='/date'>
                    <Date />
                  </Route>
                  <Route path='/settings'>
                    <Settings />
                  </Route>
                  <Route path='/'>
                    <Home />
                  </Route>
                </Switch>
              </main>
            </div>
          </Router>
        </TaskListContextProvider>
      </LanguageProvider>
    </BackgroundContextProvider>
  );
}









