import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.container}>
        <div>
          <img src={logo} alt="logo" />
          <p>
            Plan and book your perfect trip with expert advice, travel trip
            destination from us
          </p>
          <p className={classes.footerP2}>
            &copy; 2022 Thousans Sunny. All rights reserved
          </p>
        </div>
        <div>
          <h3>Destination</h3>
          <p>Africa</p>
          <p>Antarctica</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>America</p>
        </div>
        <div>
          <h3>Shop</h3>
          <p>Destination guide</p>
          <p>Pictorial & Gifts</p>
          <p>Special Offers</p>
          <p>Delivery Times</p>
          <p>FAQs</p>
        </div>
        <div>
          <h3>Interest</h3>
          <p>Adventure Travel</p>
          <p>Art And Culture</p>
          <p>Wildlife And Nature</p>
          <p>Family Holidays</p>
          <p>Food And Drinks</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
