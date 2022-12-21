import classes from "./HolidayFinder.module.css";

const HolidayFinder = () => {
  return (
    <form className={classes.form}>
      <select id="location" name="location" defaultValue="DEFAULT">
        <option value="DEFAULT" disabled hidden>
          Location
        </option>
        <option value="Nigeria">Nigeria</option>
        <option value="London">London</option>
        <option value="Canada">Canada</option>
        <option value="US">US</option>
      </select>
      <select id="activity" name="activity" defaultValue="DEFAULT">
        <option value="DEFAULT" disabled hidden>
          Activity
        </option>
        <option value="Religious">Nigeria</option>
        <option value="Ball">London</option>
        <option value="Leisure">Canada</option>
        <option value="Ludo">US</option>
      </select>
      <select id="grade" name="grade" defaultValue="DEFAULT">
        <option value="DEFAULT" disabled hidden>
          Grade
        </option>
        <option value="Regular">Nigeria</option>
        <option value="A">London</option>
        <option value="A++">Canada</option>
        <option value="Regu+">US</option>
      </select>
      <select id="date" name="date" defaultValue="DEFAULT">
        <option value="DEFAULT" disabled hidden>
          Date
        </option>
        <option value="Aug 12">Nigeria</option>
        <option value="Sep 13">London</option>
        <option value="Oct 3">Canada</option>
        <option value="Dec 19">US</option>
      </select>
      <button>Explore</button>
    </form>
  );
};

export default HolidayFinder;
