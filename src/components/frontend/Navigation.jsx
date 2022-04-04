import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import { withRouter } from "react-router-dom";
ReactGA.initialize('UA-218248816-2');
function Navigation() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <nav className="navbar navbar-light navbar-expand bl__navbar mb-5">
    <div className="container-fluid">
        <div className="navbar-collapse justify-content-center">
            <ul className="nav navbar-nav justify-content-center">
                <li className="nav-item" ><a className="nav-link dF" href="#dfirmy">Dla firmy</a></li>
                <li className="nav-item" ><a className="nav-link dC" href="#dciebie">Dla Ciebie</a></li>
                <li className="nav-item" ><a className="nav-link dJa" href="#dlaczegoja">Dlatego Ja</a></li>
                <li className="nav-item" ><a className="nav-link kontakt" href="#kontakt">Kontakt</a></li>
            </ul>
        </div>
    </div>
	</nav>
  );
}

export default withRouter(Navigation);