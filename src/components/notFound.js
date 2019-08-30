import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h2>This page doesn't exist.</h2>
    <Link to="/">Go back to homepage.</Link>
  </>
);

export default NotFound;
