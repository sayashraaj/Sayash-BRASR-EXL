import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Chat from './Chat/Chat'
import PleaseLogin from './PleaseLogin'

const Switcher = ({auth,location}) => {
  const { room } = queryString.parse(location.search);
  function renderContent() {
    switch (auth) {
      case null:
        return <>no</>;
      case false:
        return <PleaseLogin />;
      default:
        return <Chat name={auth.depth.name} room={room} />;
    }
  }
  const roomArray =["GC","OAT","Cauvery","Usha","Himalaya","Sangam","SAC","WatsaStadium","ShoppingCentre"];
  const found = roomArray.includes(room)

  // console.log(auth) if room is null it crashes the server so check is placed
  if(!room || !found) return (<div>Room unavailable</div>);
    return (
    	<>
    	{renderContent()}
    	</>
    );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Switcher);
