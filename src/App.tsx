import { ReactElement } from "react";
import "./assets/App.scss"
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import MenuList from "./components/Menu";

const App = (): ReactElement => {
  return (
    <>
      <Layout>
        <Nav />
        <MenuList />
      </Layout>
    </>
  );
};

export default App;
