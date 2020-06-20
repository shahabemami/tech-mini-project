import React from 'react';

// aws Auth
import { Auth } from "aws-amplify";

// modules
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = async data => {
        console.log(data);

        // AWS Cognito integration here
        try {
            const user = await Auth.signIn(data.email, data.password);
            console.log(user);
            toast.success('you are successfuly logged in.');
            history.push('home');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className={`box-form login ${props.class}`}>
            <div className='box-login-tab'></div>
            <div className='box-login-title'>
                <h5 style={{ marginLeft: "3em", marginTop: "10px" }} >LOGIN</h5>
            </div>
            <div className='box-login'>
                <div className='fieldset-body'>
                    <button onClick={props.click} className='b b-form' title='Mais Informações'>Register</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='field'>
                            <label>E-MAIL</label>
                            <input ref={register} name="email" type='email' />
                        </p>
                        <p className='field'>
                            <label>PASSWORD</label>
                            <input ref={register} name="password" type='password' />
                        </p>
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login;
