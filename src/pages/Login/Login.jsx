import React from "react";
import { Link } from "react-router-dom";
import ImageType from "../../components/ImageType/ImageType.jsx";
import Form from "./Form.jsx";
import TearmsAndCondition from "./TearmsAndCondition.jsx";
import GoogleLogin from "../../components/Shared/GoogleLogin/GoogleLogin.jsx";

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(watch("example"))
  // watch input value by passing the name of it

  return (
    <div>
      <div>
        {/* <LoginLogo /> */}
        <ImageType
          imgSrc={"https://i.ibb.co/Mh4nvDY/logo-bmhbd.png"}
        ></ImageType>
      </div>
      <div>
        <Form onSubmit={onSubmit} />
      </div>
      <div>
        <small className="flex justify-center w-full pt-2 text-red-600">
          or
        </small>
        <div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
      <div>
        <TearmsAndCondition />
      </div>
      <div>
        <h3 className="text-center py-4">
          No account yet?{" "}
          <Link className="text-red-400 font-base" to={"/registration"}>
            Registration
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
