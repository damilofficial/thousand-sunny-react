import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

import classes from "./Register.module.css";

const Register = () => {
  return (
    <section className={classes.regiSec}>
      <div className={classes.regiSec1}>
        <FontAwesomeIcon className={classes.regiSecIcon} icon={faIdCard} />
        <h1>Join us</h1>
        <p>A few clicks away from creating your account</p>
        <button type="button">About Us</button>
      </div>
      <div className={classes.regiSec2}>
        <h2>Register Hear</h2>
        <form>
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="username" placeholder="Username" />
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
        </form>
        <button type="button">Register</button>
      </div>
    </section>
  );
};

export default Register;
