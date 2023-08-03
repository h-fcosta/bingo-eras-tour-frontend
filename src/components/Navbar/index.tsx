export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="teste"
          />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="https://github.com/h-fcosta" className="navbar-item">
            About the Dev
          </a>
        </div>
      </div>
    </nav>
  );
}
