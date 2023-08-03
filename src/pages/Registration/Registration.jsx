import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import TextInputField from '../../components/TextInputField/TextInputField.jsx';
import UploadedImage from '../../components/UploadedImage/UploadedImage.jsx';

const Registration = () => {
    const [selectedFile, setSelectedFile] = useState('https://i.ibb.co/QFWQc9p/user-Profile.png');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {


        console.log(data)
    }

   // watch input value by passing the name of it

    return (

        <div className='py-20 relative h-[100vh]'>
            <div>
                <UploadedImage handleFileChange={handleFileChange} selectedFile={selectedFile}></UploadedImage>
            </div>
            <div className='fixed transition duration-500  top-0 left-0  right-0'>
                <Link to='/login'>
                    <div className='flex items-center w-full bg-red-600 text-base font-medium py-1  text-white text-start rounded-b-md gap-2 pl-1'>
                    <AiOutlineArrowLeft />
                        <button>Donor Registration</button>
                    </div>
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextInputField type={'text'} register={register} registerName={'userName'} label={"Name"}></TextInputField>
                <TextInputField type={'email'} hints={'user email'} register={register} require={false} registerName={'userEmail'} label={"Email"}></TextInputField>

                {/* <input defaultValue="test" {...register("example")} /> */}

                {errors.exampleRequired && <span>This field is required</span>}


                <div className='fixed inset-x-0 bottom-0'>
                    <Button rounded={'rounded-t-md'} type="submit" btnText={'Register'} ></Button>

                </div>
                {/* <input type="submit" /> */}
            </form>
            <div>
                <h4>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae alias excepturi ad consectetur quibusdam dolore voluptatibus, nesciunt aut culpa est saepe rem! Praesentium molestiae earum incidunt esse repellat, blanditiis molestias?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo sed eligendi rem accusantium, soluta, fuga magni aut neque sit facere beatae perferendis autem quibusdam vel culpa quas commodi suscipit.
                </h4>
            </div>
        </div>
    )
}
export default Registration;