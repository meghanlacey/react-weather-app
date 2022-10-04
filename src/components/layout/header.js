import "./header.css";

const Header = () => {
  return (
    <div>
      <header className="app-header">
        <img alt="header-img" src="icons/header_icon.png"></img>
        <h1 className="header-title">Find Your City's Forecast</h1>
      </header>
      <div className="header-text">
        <p>
          Using the search bar below, simply type in a city with a population of
          at least 1 million people. When your chosen city appears as an
          auto-fill dropdown, click on the dropdown to see the current weather
          and upcoming forecast conditions.
        </p>
      </div>
    </div>
  );
};

export default Header;
