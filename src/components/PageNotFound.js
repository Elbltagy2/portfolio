import React from 'react';
import './notfound.css'; // import CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
