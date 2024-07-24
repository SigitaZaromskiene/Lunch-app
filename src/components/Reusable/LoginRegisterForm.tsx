import styles from "../../assets/styles/LoginRegisterForm.module.scss";
import classNames from "classnames/bind";
import LogoHorizontal from "./LogoHorizontal";

const cx = classNames.bind(styles);

const LoginRegisterForm: React.FC = () => {
  return (
    <form className={cx("login-register-form")}>
      <div className="login-register-form__icon">
       <LogoHorizontal/>
      </div>
      <div className="login-register-form__buttons">
        <a href="#">LOGIN</a>
        <a href="#">REGISTER</a>
      </div>
      <div className="login-register-form__border"></div>
      <h1>Register</h1>
      <p>Join our office foodies today!</p>
      <label>
        <input></input>
      </label>
      <label>
        <input></input>
      </label>
      <label>
        <input></input>
      </label>
      <div>
        <input type="checkbox"></input>
        <p>I have read the Comunity Rules</p>
      </div>
      <button></button>
    </form>
  );
};

export default LoginRegisterForm;
