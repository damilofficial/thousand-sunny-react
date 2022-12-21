import classes from "./Description.module.css";
import thousand2 from "../../assets/Thousand-02 1.png";

const Description = () => {
  return (
    <div className={classes.description}>
      <div>
        <img src={thousand2} alt="section2Image" />
      </div>
      <div>
        <h1>A new way to explore the world</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco l
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Description;
