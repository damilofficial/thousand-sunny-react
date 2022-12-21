import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";

import Header from "./components/HomeSection/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainNavigation from "./layout/MainNavigation";
import Layout from "./layout/Layout";
import Description from "./components/Description/Description";
import Destination from "./components/Destination/Destination";
import Guides from "./components/Guides/Guides";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Cards from "./components/UI/Cards";

function App() {
  return (
    <Fragment>
      <Layout>
        <MainNavigation />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Route exact path="/">
          <Header />
          <Description />
          <Destination />
          <Guides />
          <Testimonials />
          <Cards />
        </Route>
      </Layout>
      <Route exact path="/">
        <Footer />
      </Route>
    </Fragment>
  );
}

export default App;
