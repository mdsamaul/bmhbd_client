import React from 'react';
import { Link } from 'react-router-dom';

const TearmsAndCondition = () => {
    return (
        <div className='text-center px-[5%]'>
            <small>By Clicking sing in button, you aggree to bmhbd org's <Link className='text-red-700 font-medium' to={'/'}>Terms and Conditions</Link> of Use To learn more about how bmhbd collects, uses, sheres and protects your personal data, device info please read bmhbdorg's. <Link className='text-red-700 font-medium' to={'/'}>Privacy Policy</Link></small>
        </div>
    );
};

export default TearmsAndCondition;