import React from "react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { Vortex } from "react-loader-spinner";

const GoogleLogin = () => {
  const { signInWithGoogle, loading, setLoading } = useContext(AuthContext);
  console.log(loading);

  const handlerSignInWithGoogle = () => {
    signInWithGoogle()
      .then((loggeduser) => {
        console.log(loading);
        console.log(loggeduser);
      })
      .catch((err) => {
        setLoading(false);
        console.log("error", err.message);
      });
  };
  return (
    <div className="py-2 px-5">
      {loading ? (
        <button
          disabled
          className={`
        w-full flex cursor-not-allowed justify-center text-3xl items-center py-1.5 shadow font-normal bg-white hover:text-red-700 rounded duration-500 border border-red-700 text-white hover:bg-red-700 `}
        >
          <Vortex
            visible={true}
            height="30"
            width="30"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </button>
      ) : (
        <button
          onClick={handlerSignInWithGoogle}
          className={`  w-full flex justify-center text-3xl items-center py-1.5 shadow font-normal bg-white hover:text-red-700 rounded duration-500 border border-red-700 text-white hover:bg-red-700 `}
        >
          <FcGoogle />
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;
