import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider as StoreProvider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { configureStore } from './store'
import routes from './routes'
import './mock'

const history = createBrowserHistory()
const store = configureStore()

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </StoreProvider>
  )
}

export default App
