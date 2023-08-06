import React from "react";

const Profation = ({ label, register, registerName }) => {
  return (
    <div>
      <label className="block">{label}</label>
      <div className="flex justify-around py-2">
        <div>
          <label htmlFor="field-student">
            <input
              {...register(registerName)}
              type="radio"
              name="profession"
              value="Student"
              id="field-student"
            />
            <span className="pl-1"> Student</span>
          </label>
        </div>

        <div>
          <label htmlFor="field-profession-other">
            <input
              {...register(registerName)}
              type="radio"
              name="profession"
              value="Other"
              id="field-profession-other"
            />
            <span className="pl-1"> Other</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profation;
