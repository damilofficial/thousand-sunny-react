import thousand1 from "../../assets/thousand-01 1.png";
import HolidayFinder from "./HolidayFinder";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.header}>
      <div>
        <h1>Explore and Travel</h1>
        <h2>Holiday finder</h2>
        <hr />
        <HolidayFinder />
      </div>
      <div>
        <img src={thousand1} alt="section1Image" />
      </div>
    </section>
  );
};

export default Header;
