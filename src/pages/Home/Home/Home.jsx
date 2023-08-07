import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";

const Home = () => {
  return (
    <div className="w-[100vw] bg-amber-400 h-[100vh] flex justify-center items-center">
      <div>this is home pages</div>
      <Link to="/login">
        <Button btnText={"Login"} />
      </Link>
    </div>
  );
};

export default Home;
