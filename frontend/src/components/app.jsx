import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import './root.css';
import NavBar from './nav/navbar_container';
import BoardsIndex from '../components/boards/boards_index_container';
// import LoginForm from './session/login_form_container';
// import SignupForm from './session/signup_form_container';
// import CreateBoardForm from '../components/boards/create_board_form'
import Modal from '../components/modal/modal';
import CreatePinForm from '../components/pins/create_pin_form';

const App = () => (
  <div className='root-container'>
    <div className='root'>
      <NavBar />
      <Switch>
        <Route path='/users/:userId/boards' component={BoardsIndex} />
        <Route path='/users/:userId/upload' component={CreatePinForm} />
        {/* <ProtectedRoute path='/boards' component={ CreateBoardForm } />
        <AuthRoute exact path="/signup" component={ SignupForm } />
        <AuthRoute exact path="/login" component={ LoginForm } /> */}
        <Route exact path='/' component={MainPage} />
      </Switch>
      <Modal />
    </div>
  </div>
);

export default App;
