import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <header class="header">
        <div class="logo">
          <a href="jsx-a11y/anchor-is-valid" id="titulo">
            <h1> Alan Congregado</h1>
          </a>
        </div>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="jsx-a11y/anchor-is-valid">Notebooks</a>
            </li>
            <li>
              <a href="jsx-a11y/anchor-is-valid">Monitores</a>
            </li>
            <li>
              <a href="jsx-a11y/anchor-is-valid">Parlantes</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};

export default Navbar;
