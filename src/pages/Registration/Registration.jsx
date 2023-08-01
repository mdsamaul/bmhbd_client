import React from 'react';
import { useForm } from 'react-hook-form';
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

        console.log("hellow");
        console.log(data)
    }

   // watch input value by passing the name of it

    return (

        <div className='w-full h-screen'>
            <div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInputField type={'text'} register={register} registerName={'userName'} label={"Name"}></TextInputField>
                <TextInputField type={'email'} hints={'user email'} register={register} require={false} registerName={'userEmail'} label={"Email"}></TextInputField>

                {/* <input defaultValue="test" {...register("example")} /> */}

                {errors.exampleRequired && <span>This field is required</span>}

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, possimus. Voluptates aut quis error earum ipsa officiis aliquam consequatur laudantium dolores atque magnam laborum exercitationem deserunt,
                </div>
                <div className='fixed right-0 left-0 bottom-4'>
                    <Button type="submit" btnText={'Register'}></Button>
                </div>
                {/* <input type="submit" /> */}
            </form>
        </div>
    )
}
export default Registration;