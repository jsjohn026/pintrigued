import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      const { currentUser, openModal } = this.props;
      return (
        <div className='header-button'>
          {/* <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link> */}
          <div className='navbar-username'>
            <Link to={`/users/${currentUser.id}/boards`}>
              {currentUser.username}
            </Link>
          </div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='header-button'>
          {/* <Link to={'/signup'}>Signup</Link> */}
          {/* <Link to={'/login'}>Login</Link> */}
          <button onClick={() => this.props.openModal('signup')}>Signup</button>
          <button onClick={() => this.props.openModal('login')}>Login</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='header-nav'>
          <h1 className='header-logo'>Pintrigue</h1>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
