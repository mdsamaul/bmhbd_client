import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import TextInputField from "../../components/TextInputField/TextInputField.jsx";
import UploadedImage from "../../components/UploadedImage/UploadedImage.jsx";
import { FcManager } from "react-icons/fc";
import SelectBlood from "../../components/SelectBlood/SelectBlood.jsx";

const Registration = () => {
  const [selectedFile, setSelectedFile] = useState(
    "https://i.ibb.co/QFWQc9p/user-Profile.png"
  );

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // watch input value by passing the name of it

  return (
    <div className="py-20 relative h-[100vh]">
      <div>
        <UploadedImage
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
        ></UploadedImage>
      </div>
      <div className="fixed transition duration-500  top-0 left-0  right-0">
        <Link to="/login">
          <div className="flex items-center w-full bg-red-600 text-base font-medium py-2  text-white text-start rounded-b-md gap-2 pl-1">
            <AiOutlineArrowLeft />
            <button>Donor Registration</button>
          </div>
        </Link>
      </div>
      <div className="pb-20 px-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInputField
            type={"text"}
            register={register}
            registerName={"userName"}
            label={"Name"}
            hints={"Blood Donar Name"}
          ></TextInputField>
          <div className="flex py-2">
            <div className="w-[90%]">
              <TextInputField
                type={"text"}
                hints={"Mobile No"}
                register={register}
                registerName={"userMobileNo"}
                label={"Mobile"}
              ></TextInputField>
            </div>
            <div className="w-[10%] py-2 mt-5 hero ">
              <FcManager className="mx-auto cursor-pointer text-4xl" />
            </div>
          </div>
          <TextInputField
            type={"email"}
            hints={"Enter Your Email"}
            register={register}
            registerName={"userEmail"}
            label={"Email"}
          ></TextInputField>
          <div className="py-2">
            <TextInputField
              type={"password"}
              hints={"12345678"}
              register={register}
              registerName={"userPassword"}
              label={"Password"}
            ></TextInputField>
          </div>
          <div>
            <SelectBlood
              register={register}
              registerName={"bloodGroup"}
            ></SelectBlood>
          </div>

          {/* <input defaultValue="test" {...register("example")} /> */}

          {errors.exampleRequired && <span>This field is required</span>}

          <div className="fixed inset-x-0 bottom-1">
            <Button
              rounded={"rounded-t-md"}
              type="submit"
              btnText={"Register"}
            ></Button>
          </div>
          {/* <input type="submit" /> */}
        </form>
      </div>

      <div className="py-20">{/* <RadioField></RadioField> */}</div>
    </div>
  );
};
export default Registration;
