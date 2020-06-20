import React from 'react';

// aws Auth
import { Auth } from "aws-amplify";

// modules
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Register = (props) => {
    const { register, handleSubmit } = useForm();
    const OnSubmit = async data => {
        try {
            const signUpResponse = await Auth.signUp({
                ...data,
            });
            console.log(signUpResponse);
            toast.success('you are successfuly signed up now log in.');

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className={` ${props.class}`}>
            <div className='box-login-tab'></div>
            <div className='box-login-title'>
                <h5 style={{ marginLeft: "3em", marginTop: "10px" }} >Register</h5>
            </div>
            <div className='box-login'>
                <div className='fieldset-body'>
                    <button onClick={props.click} className='b b-form'>Login</button>

                    <form onSubmit={handleSubmit(OnSubmit)} >
                        <p className='field'>
                            <label>E-MAIL</label>
                            <input ref={register} name="username" type='email' />
                        </p>
                        <p className='field'>
                            <label>PASSWORD</label>
                            <input ref={register} name="password" type='password' title='Password' />
                        </p>
                        <input type='submit' value='Register' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
