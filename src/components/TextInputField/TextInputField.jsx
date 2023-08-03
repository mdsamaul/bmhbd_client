import React from 'react';

const TextInputField = ({ label, register, hints, registerName, require = true, type, }) => {
    console.log(require);

    return (
        <div>
            <label>{label}</label>

            <input type={type} className='w-full appearance-none bg-transparent border-b  text-gray-700 pr-3 py-1 px-2 leading-tight focus:outline-none' placeholder={hints} {...register(registerName)} required={require} />
        </div>
    );
};

export default TextInputField;
// import React from 'react';

// const TextInputField = ({ example, test, register }) => {
//     return (
//         <div>
//             <input defaultValue={test} {...register("example")} />
//         </div>
//     );
// };

// export default TextInputField;