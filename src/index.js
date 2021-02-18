import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundry from './components/error-boundry/error-boundry'
import DBService from './db-service/db-service'
import DBServiceContext from './components/db-service-context/db-service-context'
import store from './store'
import './index.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const dbService = new DBService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
		  <DBServiceContext.Provider value={dbService}>
		    <Router>
		    	<App />
		    </Router>
		  </DBServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root')
)