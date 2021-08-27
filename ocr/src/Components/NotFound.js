import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => (
  <div style={{position:"absolute",top:"40%",left:"40%",textAlign:"center"}}>
    <h1>404 - Not Found!</h1>
    <hr style={{backgroundColor:"white"}}></hr>
    <Link to="/">
      <Button>Go Home</Button>
    </Link>
  </div>
);

export default NotFound;