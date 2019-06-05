import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
=======
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import CreateBoardForm from './boards/create_board_form';
import './root.css';

>>>>>>> boards
import MainPage from './main/main_page';
import './root.css'
import NavBar from './nav/navbar_container';
import BoardsIndex from '../components/boards/boards_index_container'
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';

const App = () => (
<<<<<<< HEAD
  <div className="root-container">
    <div className="root">
      <NavBar />
      <Switch>
        <AuthRoute exact path="/signup" component={ SignupForm } />
        <AuthRoute exact path="/login" component={ LoginForm } />
        <Route path="/user/:userId/boards" component={ BoardsIndex } />
        <AuthRoute exact path="/" component={ MainPage } />
=======
  <div className='root-container'>
    <div className='root'>
      <NavBarContainer />
      <Switch>
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/' component={MainPage} />
        <ProtectedRoute exact path='/boards' component={CreateBoardForm} />
>>>>>>> boards
      </Switch>
    </div>
  </div>
);

export default App;
