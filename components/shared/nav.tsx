import ThemeToggle from "../theme-toggle";
import Logo from "./logo";

const Nav = () => {
  return (
    <nav className=" border-b">
      <div className=" wrapper m-auto py-4 flex justify-between items-center">
        <Logo/>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Nav;



/*
 
  */