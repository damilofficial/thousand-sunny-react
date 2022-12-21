import classes from "./Testimonials.module.css";

import testimonialPhoto from "../../assets/photo.png";

const Testimonials = () => {
  return (
    <section className={classes.testimonialFull}>
      <h1>Testimonials</h1>
      <div className={classes.testimonial}>
        <div className={classes.col1}>
          <h1>&#9733; &#9733; &#9733; &#9733; &#9733;</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
          </p>
          <h2>Edward Newgate</h2>
          <p>Founder Circle</p>
        </div>
        <div>
          <img src={testimonialPhoto} alt="section4Image" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
