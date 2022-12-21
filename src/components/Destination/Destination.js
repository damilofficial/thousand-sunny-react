import { Link } from "react-router-dom";

import classes from "./Destination.module.css";
import destination1 from "../../assets/Raja ampat.png";
import destination2 from "../../assets/Fanjingshan.png";
import destination3 from "../../assets/Vevey.png";
import destination4 from "../../assets/Skadar.png";

const Destination = () => {
  return (
    <section className={classes.destinationAll}>
      <div className={classes.destination}>
        <div>
          <h1>Featured destination</h1>
        </div>
        <div className={classes.viewAll1}>
          <Link to="#">View all &gt;</Link>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img src={destination1} alt="destination1Pic" />
        <img src={destination2} alt="destination2Pic" />
        <img src={destination3} alt="destination3Pic" />
        <img src={destination4} alt="destination4Pic" />
      </div>
      <div className={classes.viewAll2}>
        <Link to="#">View all &gt;</Link>
      </div>
    </section>
  );
};

export default Destination;
