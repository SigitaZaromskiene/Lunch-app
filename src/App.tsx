import React from "react";
import "./assets/App.scss";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import MenuList from "./components/Menu/Menu";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Nav />
        <MenuList/>
      </Layout>
    </>
  );
};

export default App;
