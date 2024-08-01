import { ReactElement } from "react";
import "./assets/App.scss";
import Login from "./components/Login/Login";

const App = (): ReactElement => {
  return (
    <div className="app_container">
      <Login />
    </div>
  );
};

export default App;
