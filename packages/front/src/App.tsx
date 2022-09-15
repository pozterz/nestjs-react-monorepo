import React from 'react'
import './App.css'
import { Route, Router, Switch } from 'react-router-dom'
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary'
import { createBrowserHistory } from 'history'
import { Settings } from 'luxon'

import { PrivateRoute } from './components/Router/PrivateRoute'
import { LoginPage } from './views/Login'
import Main from './views/Main'

const browserHistory = createBrowserHistory({
  basename: '/front',
})
Settings.defaultLocale = 'th-TH'

function App() {
  return (
    <ErrorBoundary>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/private" component={Main} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
