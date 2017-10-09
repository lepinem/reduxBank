import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import store from './store'
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import App from './components/App';
import Baselayout from './components/BaseLayout'
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';
import AccountDetail from './containers/AccountDetail';


//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Baselayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users/:id/:accountId" component={AccountDetail} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/users" component={UserList} />
        </Switch>
      </Baselayout>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
