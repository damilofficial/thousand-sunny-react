import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import thousand3 from "../assets/Thousand-03.png";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.loginSub}>
        <form>
          <FontAwesomeIcon
            className={classes.specialLoginIcon}
            icon={faRightToBracket}
          />
          <div className={classes.loginSubIcon}>
            <FontAwesomeIcon className={classes.loginIcon} icon={faUser} />
            <input
              placeholder="Username or email"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <br />
          <div className={classes.loginSubIcon}>
            <FontAwesomeIcon className={classes.loginIcon} icon={faKey} />
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className={classes.loginOthers}>
            <div>
              <input type="checkbox" name="rememberMe" value="rememberMe" />
              <label for="RememberMe">
                <p>Remember Me</p>
              </label>
            </div>
            <div>
              <button>Login</button>
            </div>
          </div>

          <div className={classes.loginOthers}>
            <div>
              <Link to="/register">Register now</Link>
            </div>
            <div>
              <Link to="#">Forgot Password</Link>
            </div>
          </div>
        </form>
        <h3 className={classes.loginAlt}>Or</h3>
        <div className={classes.loginBtns}>
          <button>
            <FontAwesomeIcon icon={faFacebook} /> Login with facebook
          </button>
          <button>
            <FontAwesomeIcon icon={faTwitter} /> Login with twitter
          </button>
          <button>
            <FontAwesomeIcon icon={faGoogle} /> Login with google
          </button>
        </div>
      </div>
      <div>
        <img src={thousand3} alt="loginImage" />
      </div>
    </div>
  );
};

export default Login;
