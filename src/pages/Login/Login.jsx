import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form.jsx';
import LoginLogo from './LoginLogo.jsx';
import TearmsAndCondition from './TearmsAndCondition.jsx';

const Login = () => {


    const onSubmit = (data) => {

        console.log(data)
    }


    // console.log(watch("example")) 
    // watch input value by passing the name of it

    return (

        <div>
            <div>
                <LoginLogo />
            </div>
            <div>
                <Form onSubmit={onSubmit} />
            </div>
            <div>
                <TearmsAndCondition />
            </div>
            <div>
                <h3 className='text-center py-4'>No account yet? <Link className='text-red-400 font-base' to={'/registration'}>Registration</Link></h3>
            </div>
        </div>
    )
};

export default Login;