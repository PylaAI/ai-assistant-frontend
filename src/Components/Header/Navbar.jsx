import { Link } from 'react-router-dom';
import './header.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" title="Home Page">
                <img
                  src="https://cdn-misc.brawlify.com/front/Star.svg"
                  alt=""
                  width={'30px'}
                />
                <Link to="/" className="navbar-brand">
                  Brawlify
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/maps" className="nav-link">
                  Maps
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/brawlers" className="nav-link">
                  Brawlers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ai-assistant" className="nav-link">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
