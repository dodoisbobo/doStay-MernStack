import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button/index";
import BrandIcon from "parts/IconText";
export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon></BrandIcon>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/collections")}`}>
                  <Button className="nav-link" type="link" href="/collections">
                    Collections
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/Review")}`}>
                  <Button className="nav-link" type="link" href="/Review">
                    Review
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/Agents")}`}>
                  <Button className="nav-link" type="link" href="/Agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
