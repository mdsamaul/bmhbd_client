import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import TextInputField from '../../components/TextInputField/TextInputField.jsx';

const Registration = () => {
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

        <div className='my-14 relative h-[100vh]'>
            <div className='fixed transition duration-500 bg-red-600  top-0 left-0  right-0'>
                <Link to='/login'>
                    <div className='flex mt-8 items-center w-full bg-red-600 text-base font-medium  pb-2 text-white text-start gap-4 pl-1'>
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

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, possimus. Voluptates aut quis error earum ipsa officiis aliquam consequatur laudantium dolores atque magnam laborum exercitationem deserunt,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, possimus. Voluptates aut quis error earum ipsa officiis aliquam consequatur laudantium dolores atque magnam laborum exercitationem deserunt,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, possimus. Voluptates aut quis error earum ipsa officiis aliquam consequatur laudantium dolores atque magnam laborum exercitationem deserunt,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, possimus. Voluptates aut quis error earum ipsa officiis aliquam consequatur laudantium dolores atque magnam laborum exercitationem deserunt,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, possimus. Voluptates aut quis error earum ipsa officiis aliquam consequatur laudantium dolores atque magnam laborum exercitationem deserunt,
                </div>
                <div className='fixed inset-x-0 bottom-0 bg-red-700 w-full h-11'>
                    <Button type="submit" btnText={'Register'} ></Button>

                </div>
                {/* <input type="submit" /> */}
            </form>
        </div>
    )
}
export default Registration;