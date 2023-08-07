import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import Loader from "../../../components/Loader/Loader.jsx";

const Home = () => {
  return (
    <div className="">
      <div>this is home pages</div>
      <Loader />
      <Link to="/login">
        <Button btnText={"Login"} />
      </Link>
    </div>
  );
};

export default Home;
