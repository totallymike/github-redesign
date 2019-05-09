import React from "react";
import { Header } from "./Header";
import { useRoute } from "react-router5";
import { Home } from "../pages/logged-in/Home";

const LoggedInComponent = () => {
  const { route: currentRoute } = useRoute();

  if (currentRoute.name === 'home') {
    return <Home />;
  }

  return <p>I dunno</p>;
}
export const LoggedIn = () => (
  <React.Fragment>
    <Header />
    <LoggedInComponent />
  </React.Fragment>
);
