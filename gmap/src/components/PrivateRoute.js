import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {

  const isLoggedIn = auth
  // console.log(auth)

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn!==false ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/PleaseLogin', state: { from: props.location } }} />
        )
      }
    />
  )
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(PrivateRoute);