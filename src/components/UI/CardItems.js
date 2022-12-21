import React from "react";
import { Link } from "react-router-dom";

import classes from "./CardItems.module.css";

const CardItems = (props) => {
  return (
    <div className={classes.cardItem}>
      <img src={props.src} alt={props.alt} />
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <Link to="#">Read more</Link>
    </div>
  );
};

export default CardItems;
