import icon from "../../assets/img/icon.png";

function LoginRegisterForm() {
  return (
    <form className="form_container">
      <div className="form_container_icon_container">
        <img src={icon}></img>
      </div>
      <div className="form_container_login_register_path">
        <a href="#">LOGIN</a>
        <a href="#">REGISTER</a>
      </div>
      <p className="form_container_login_register_path_border"></p>
      <h2>Register</h2>
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
        <p>
          I have read the <a href>Comunity Rules</a>
        </p>
      </div>

      <button></button>
    </form>
  );
}

export default LoginRegisterForm;
