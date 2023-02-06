import React from 'react'
import { Switch, Route, Router, Link } from 'react-router-dom'
import  MoviesSpanish  from './views/module/Movies'
import generateStore from './state/store'
import { Provider } from 'react-redux'

export default ({ history }) => {

  const store = generateStore()
  return (
    <Provider store={store}>    
      <Router history={history}>
        <Switch>
          <Route path="/ES" component={MoviesSpanish} />
        </Switch>
      </Router>
    </Provider>
  )
}
