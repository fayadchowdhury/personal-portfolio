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
      <div className="fixed top-0 w-full md:py-5 max-md:py-10 z-10 grid grid-cols-3 justify-between">
        <div className="flex items-center justify-start max-md:mx-5 mx-10">
          <a href="#hero" className="flex text-sub-header-special">
            fayadchowdhury
          </a>
        </div>
        <nav className="flex items-center justify-center">
          <ul className="flex grid-cols-3 items-center justify-between max-md:hidden">
            {links.map((link, index) => (
              <li className="text-content-special px-10" key={index}>
                <a href={link.url} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="flex items-center justify-end max-md:mx-5 mx-10">
            <ThemeToggler />
          </div>
          <div className="flex items-center justify-end max-md:mx-5 mx-10">
            <a
              className="flex py-2 px-4 rounded-lg gap-2 dark:bg-white dark:hover:bg-mid-white dark:text-black bg-black hover:bg-mid-black text-white"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
