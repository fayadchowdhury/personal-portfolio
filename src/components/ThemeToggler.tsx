import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
        console.log(darkMode);
      }}
      className="w-7 h-7"
    >
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggler;
