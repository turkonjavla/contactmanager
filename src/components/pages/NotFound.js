import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="row justify-content-left">
      <div className="col-md-6">
        <h3 style={{ color: '#9E9E9E', fontWeight: 'bold' }} className="display-2">404</h3>
        <p class="lead">We couldn't find the page you were looking for</p>
        <Link to="/" style={{ fontWeight: 'bold'}} className="text-muted"><i className="fas fa-chevron-left"></i> Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound;