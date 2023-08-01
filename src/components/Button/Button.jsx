import React from 'react';

const Button = ({ btnText, pading }) => {

    return (
        <div>
            <button className='w-full py-1.5 rounded shadow font-normal hover:bg-white hover:text-red-700 duration-500 border border-red-700 text-white bg-red-700'>{btnText}</button>
        </div>
    );
};

export default Button;