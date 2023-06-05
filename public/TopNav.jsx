import logo from "../src/assets/logo.svg"
import qn from "../src/assets/qn.svg"
import settings from "../src/assets/settings.svg"
import Login from "../src/assets/login.svg"

function TopNav() {
    return (
        <div className="top-nav">
            <a href="#" className="logo">
                <img src={logo} width="100px" height="100px" />
            </a>
            <section className="searchBar">
                <button type="submit">Search</button>
                <input type="search" placeholder="Earth Quakes" />
            </section>
            <a className="qn"><img src={qn} width="100px" height="50px" /></a>
            <a className="settings"><img src={settings} width="50px" height="100px" /></a>

            <a className="Login"><img src={Login} width="40px" height="100px" /></a>
        </div>
    )
}

export default TopNav