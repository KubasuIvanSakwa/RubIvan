import { NavLink } from "react-router-dom"

function Nav() {
const Active = {
  "color": "yellow"
}

  return (   
        <nav className="Nav">
          <NavLink to="/" style={({ isActive }) => isActive ? Active : null}>Home</NavLink>
          <NavLink to="/dashboard" style={({ isActive }) => isActive ? Active : null}>Dashboard</NavLink>
          <NavLink to="/latest" style={({ isActive }) => isActive ? Active : null}>Latest</NavLink>
          <NavLink to="/popular" style={({ isActive }) => isActive ? Active : null}>Popular</NavLink>
      </nav>
  );
}

export default Nav;

