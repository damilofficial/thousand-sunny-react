import classes from "./Guides.module.css";

import thousand3 from "../../assets/Thousand-03.png";

const Guides = () => {
  return (
    <section className={classes.guide}>
      <div>
        <h1>Guides by Thousand Sunny</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <button>Download</button>
      </div>
      <div>
        <img src={thousand3} alt="section3Image" />
      </div>
    </section>
  );
};

export default Guides;
