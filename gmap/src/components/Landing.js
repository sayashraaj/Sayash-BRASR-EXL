import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Gc🦣Chat!
      </h1>
      Map based Chat!
      Please Log in with IITM email to chat, or look at the map<p/>
      <Link to="/map">
      <button className="waves-effect waves-light btn-large">
      Map
     </button>
 </Link>
    </div>
  );
};

export default Landing;
