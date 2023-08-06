import React from "react";

const RadioField = ({ label, register, registerName }) => {
  return (
    <div>
      <label className="block">{label}</label>
      <div className="flex justify-around py-2">
        <div className="cursor-pointer">
          <label htmlFor="field-male">
            <input
              {...register(registerName)}
              type="radio"
              name="gender"
              value="Male"
              id="field-male"
            />
            <span className="pl-1"> Male</span>
          </label>
        </div>
        <div className="cursor-pointer">
          <label htmlFor="field-female">
            <input
              {...register(registerName)}
              type="radio"
              name="gender"
              value="Female"
              id="field-female"
            />
            <span className="pl-1"> Female</span>
          </label>
        </div>
        <div className="cursor-pointer">
          <label htmlFor="field-other">
            <input
              {...register(registerName)}
              type="radio"
              name="gender"
              value="Other"
              id="field-other"
            />
            <span className="pl-1"> Other</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioField;
