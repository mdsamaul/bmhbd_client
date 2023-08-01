
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillLock } from 'react-icons/ai';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import Button from '../../components/Button/Button.jsx';
const Form = ({ onSubmit }) => {
    const [isChecked, setIsChecked] = useState(true);
    const handleInputChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const [eyePassOpen, setEyePassOpen] = useState(false)
    const handleEye = useCallback(() => {
        setEyePassOpen(value => !value);
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <fieldset>
                    <input id="draft" className="peer/draft" type="radio"
                        checked={isChecked}
                        onChange={handleInputChange} name="status" />
                    <label htmlFor="draft" className="peer-checked/draft:text-sky-500 pl-1 font-mono pr-[20%]">Email</label>

                    <input checked={isChecked}
                        onChange={handleInputChange} id="published" className="peer/published" type="radio" name="status" />
                    <label htmlFor="published" className="peer-checked/published:text-sky-500 pl-1 font-mono">Phone</label>

                    <div className="hidden peer-checked/draft:block">
                        {/*  */}
                        <div className='flex items-center gap-3 pt-2'>
                            <div>
                                <HiOutlineMail className='text-red-600 text-lg' />
                            </div>

                            <input type='email' className='w-full appearance-none bg-transparent border-b  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Email' {...register("email", { required: false })} /></div>
                    </div>

                    <div className="hidden peer-checked/published:block pt-2">
                        <div div className='flex items-center gap-3 w-full'>
                            <div>
                                <IoMdCall className='text-red-600 text-lg' />
                            </div>
                            <input className='w-full appearance-none bg-transparent border-b  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Phone Number' {...register("Phone_number", { required: false })} />
                        </div>
                    </div>
                </fieldset>


                {/* include validation with required or other standard HTML validation rules */}
                <label className='flex items-center gap-3 my-2'>
                    <AiFillLock className='text-red-600 text-xl' />
                    <div className='relative w-full pr-3'>
                        <input type={`${eyePassOpen ? "text" : "password"}`} className='w-full appearance-none bg-transparent border-b  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Password' {...register("password", { required: true })} />
                        {
                            eyePassOpen ? <span onClick={() => handleEye()} className='absolute top-2 right-5 cursor-pointer'><FaEyeSlash /></span> : <span onClick={() => handleEye()} className='absolute top-2 right-5'><FaRegEye /></span>
                        }

                        {/* <span className='absolute top-2 right-5'><FaRegEyeSlash /></span> */}
                    </div>
                </label>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <Button onClick={handlerHello()} btnText={'Sign In'}><input className='btn' type="submit" /></Button>

            </form>
        </div>
    );
};

export default Form;