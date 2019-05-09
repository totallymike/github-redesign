import React from "react";
import { Header } from "./Header";
import { useRoute } from "react-router5";
import { Home } from "../pages/logged-in/Home";
import { Repo } from "../pages/logged-in/Repo";

const LoggedInComponent = () => {
  const { route: currentRoute } = useRoute();

  if (currentRoute.name === 'home') {
    return <Home />;
  }

  if (currentRoute.name === 'repo') {
    const { owner, repository } = currentRoute.params;
    return <Repo owner={owner} repository={repository} />;
  }

  return <p>I dunno</p>;
}
export const LoggedIn = () => (
  <React.Fragment>
    <Header />
    <LoggedInComponent />
  </React.Fragment>
);
