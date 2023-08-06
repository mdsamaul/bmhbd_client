import React from "react";
import { useForm } from "react-hook-form";

const SelectBlood = ({ label, register, registerName }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <select
          className="mt-1 px-3 py-2 bg-white border shadow-md border-red-200 placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block w-full rounded-md sm:text-sm focus:ring-1"
          {...register(registerName)}
        >
          <option>Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
    </>
  );
};

export default SelectBlood;
