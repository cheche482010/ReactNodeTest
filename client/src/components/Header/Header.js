import React from 'react';
import './Header.scss';
import Button from '../Buttons/Button';

const handleClick = (event) => {
  event.preventDefault();
};

const Header = () => {
  const links = Array.from({ length: 6 }, (_, index) => index + 1);
  return (
    <header className="header" style={{ backgroundImage: "url('/img/header.png')" }}>
      <div className="header__links">
        <img src="/img/grab.png" alt="grab" class="logo"></img>
        <div className="link">
          {links.map((_, index) => (
            <a key={index} href="#!" onClick={(event) => handleClick(event)} className="route">
              LOREM IPSUM
            </a>
          ))}
        </div>
      </div>

      <div className="header__content">
        <h1 className="title">LOREM IPSUM</h1>
        <h1 className="title">LOREM IPSUM DOLOR</h1>
        <h1 className="title">LOREM IPSUM</h1>
        <Button buttonClass="btn-green" text="WHAT IS NEXT" />
      </div>

    </header>
  );
};

export default Header;
