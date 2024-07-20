import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__content">
        <div class="islive">
          <span>Live</span>
          <FontAwesomeIcon icon={faSatelliteDish} />
        </div>

        <span className="Navbar__brand">Lorem ipsu dolor sit amet</span>

        <div className="isjoin">
          <span> Join Now </span>
          <FontAwesomeIcon icon={faCirclePlay} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
