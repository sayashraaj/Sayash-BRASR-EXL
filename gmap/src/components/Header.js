import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.css'
// class Header extends Component {
const Header = ({auth}) => {
  function renderContent() {
    switch (auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }
  // console.log(auth)
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo">
            Gc🦣Chat
          </Link>
          <ul className="right">
            {renderContent()}
          </ul>
        </div>
      </nav>
    );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
