import React from 'react';

const Header = props => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + 'logo.svg'} alt="GetCoords" />
    </header>
  )
}

export default Header;
