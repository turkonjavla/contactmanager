import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">{ branding }</Link>
        <ul className="navbar-nav mt-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">New Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: "Contact Manager"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
