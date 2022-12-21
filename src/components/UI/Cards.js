import React from "react";
import { Link } from "react-router-dom";

import CardItems from "./CardItems";
import classes from "./Cards.module.css";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";

const Cards = () => {
  return (
    <div>
      <div className={classes.row1}>
        <div>
          <h1>Trending Stories</h1>
        </div>
        <div className={classes.viewAll1}>
          <Link to="#">View all &gt;</Link>
        </div>
      </div>
      <div className={classes.row2}>
        <CardItems
          src={blog1}
          alt="blog1Pic"
          heading="The many benefits of taking a healing today"
          text="Healing holidays' are on the rise to help maximize your health and
          hepiness..."
        />
        <CardItems
          src={blog2}
          alt="blog2Pic"
          heading="The best Kyoto resturant to try Japanese food"
          text="From tofu to tea houses, hear's our guide to Kyoto's best resturant
          to visit..."
        />
        <CardItems
          src={blog3}
          alt="blog3Pic"
          heading="Skip Chichen Itza and head to his remote Yucatan"
          text="It's remote and challenging to get, but braving the jungle and
          exploring these ruins without the..."
        />
        <CardItems
          src={blog4}
          alt="blog1Pic"
          heading=">Surf's up these beginners spots around the world"
          text="If learning to surf has in on your todo list for a while, the good
          news is: it's never too late..."
        />
        <div className={classes.viewAll2}>
          <Link to="#">View all &gt;</Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
