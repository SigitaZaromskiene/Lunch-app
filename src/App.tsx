import React from "react";
import "./assets/App.scss";
import Layout from "./components/Layout";
import Nav from "./components/Nav";

const App = (): ReactElement => {
  return (
    <>
      <Layout>
        <Nav />
      </Layout>
    </>
  );
};

export default App;
