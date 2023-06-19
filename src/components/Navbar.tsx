// eslint-disable-next-line import/extensions
import { PageNavLink } from './PageNavLink';

export const Navbar = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink link="/" title="Home" />

        <PageNavLink link="/people" title="People" />
      </div>
    </div>
  </nav>
);
