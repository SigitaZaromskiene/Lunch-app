import { ReactElement } from "react";
import "./assets/App.scss";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

const App = (): ReactElement => {
  return (
    <>
      <Layout>
        <Nav />
        <Menu />
      </Layout>
    </>
  );
};

export default App;
