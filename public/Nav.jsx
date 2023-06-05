import  { useState } from 'react';
import Navigate from './Navigate';

function Nav() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (navy) => {
    setActiveLink(navy.Name);
  };

  const nav = Navigate.map(navy => {
    const isActive = navy.Name === activeLink;

    return (
      <li key={navy.Name}>
        <a className={isActive ? 'linkss active' : 'linkss'} href={navy.Url} onClick={() => handleLinkClick(navy)}>
          {navy.Name}
        </a>
      </li>
    );
  });

  return (
    <div className="Nav">
      <ul>{nav}</ul>
    </div>
  );
}

export default Nav;

