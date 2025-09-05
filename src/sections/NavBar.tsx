import ThemeToggler from "../components/ThemeToggler";

interface NavBarLeader {
  text: string;
  iconPath?: string;
}

interface NavBarLink {
  label: string;
  url: string;
}

interface NavBarProps {
  leader: NavBarLeader;
  links: NavBarLink[];
}

const NavBar = ({ leader, links }: NavBarProps) => {
  return (
    <header id="navbar">
      <div className="navbar">
        <div className="flex items-center justify-start">
          <a href="#hero" className="navbar-logo">
            {leader && leader.iconPath ? (
              <img src={leader.iconPath} />
            ) : (
              leader.text
            )}
          </a>
        </div>
        <div className="flex justify-between">
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex grid-cols-3 items-center justify-between">
              {links.map((link, index) => (
                <li className="navbar-menu-text px-5" key={index}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-start md:justify-end px-5 md:px-10">
            <ThemeToggler />
          </div>
        </div>
        <div className="flex items-center justify-end pr-5 md:pr-10">
          <a className="navbar-cta" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
