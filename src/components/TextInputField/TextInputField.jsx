import React from "react";

const TextInputField = ({
  label,
  name,
  register,
  hints,
  registerName,
  require = true,
  type,
}) => {
  // console.log(require);

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-red-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={hints}
        {...register(registerName)}
        required={require}
      />
      {/* <input type={type} className='w-full appearance-none bg-transparent border-b  text-gray-700 pr-3 py-1 px-2 leading-tight focus:outline-none' placeholder={hints} {...register(registerName)} required={require} /> */}
    </div>
  );
};

export default TextInputField;
