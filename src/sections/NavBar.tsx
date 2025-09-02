import ThemeToggler from "../components/ThemeToggler";

interface NavBarLink {
  label: string;
  url: string;
}

interface NavBarLinks {
  links: NavBarLink[];
}

const NavBar = ({ links }: NavBarLinks) => {
  return (
    <header id="navbar">
      <div className="fixed top-0 left-0 right-0 mx-5 md:mx-10 mt-3 py-3 md:py-5 z-10 flex grid-cols-3 justify-between bg-white dark:bg-black rounded-2xl">
        <div className="flex items-center justify-start">
          <a
            href="#hero"
            className="flex text-sub-header-special pl-5 md:pl-10"
          >
            fayadchowdhury
          </a>
        </div>
        <div className="flex justify-between">
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex grid-cols-3 items-center justify-between">
              {links.map((link, index) => (
                <li className="text-content-special px-5" key={index}>
                  <a href={link.url} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-start md:justify-end px-5 md:px-10">
            <ThemeToggler />
          </div>
        </div>
        <div className="flex items-center justify-end pr-5 md:pr-10">
          <a
            className="flex py-2 px-2 md:px-4 rounded-lg gap-2 dark:bg-white dark:hover:bg-mid-white dark:text-black bg-black hover:bg-mid-black text-white text-sub-header-special"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
