import { useLocation } from "react-router-dom";

// create a header simple
export const Header = ({ title }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/"}
    </header>
  );
};

Header.defaultProps = {
  title: "E-Leaning",
};

export default Header;