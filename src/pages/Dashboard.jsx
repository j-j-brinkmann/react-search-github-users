import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import { useContext } from "react";
const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Search />
        <img src={loadingImage} alt="loading spinner" className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;