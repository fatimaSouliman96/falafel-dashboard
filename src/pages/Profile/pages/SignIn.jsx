import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../style/signIn.css'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';

function SignIn() {
    const navigate = useNavigate()
    const { register, handleSubmit, errors } = useForm();
    
    const [ email , setEmail ] = useState("")
    const [ passWord , setPassWord ] = useState("")

    const handelEmailChange = (value) => {
            setEmail(value)
    }

    const handelPassWordChange = (value) => {
            setPassWord(value)
    }
    const handleSuccess = () => {
        navigate("")
      };
    
      const handleError = (error) => {
        console.log(error);
        if (error.response && error.response.status === 400) {
          window.confirm('الرجاء تعبئة جميع الحقول');
        } else {
          window.confirm('لم يتم انشاء المنتج');
        }
      };
    const onSubmit = async (data) => {
        navigate("/falafel-dashboard/main")
        // try {
        //   await axios.post('https://api-pos.alzero1store.com//api/login', {
        //     email: email,
        //     password: passWord,
        //   })
        //   .then(res => console.log(res))
        //   ;
    
        // //   handleSuccess();
        // } catch (error) {
        // //   handleError(error);
        // console.log(error)
        // }
      };
    return (
        <div>
            <form className="sign-in" onSubmit={handleSubmit(onSubmit)}>
                <h1>تسجيل دخول</h1>
                {/* <FloatingLabel controlId="floatingInput" label="الايميل" className="mb-3 email" >
                    <Form.Control {...register('email', { required: true , pattern: /^\S+@\S+$/i})} onChange={ e => handelEmailChange(e.target.value)} value={email} name='email'  type="email" placeholder="email" />
                    {errors.email && <p>Email is required and must be valid.</p>}
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="كلمة السر" className="mb-3" >
                    <Form.Control {...register('password', { required: true , minLength:8})} onChange={e => handelPassWordChange(e.target.value)} name='password' value={passWord}  type="password" placeholder="password" />
                </FloatingLabel> */}
                <button type='submit' className="add-item" >تسجيل دخول</button>
                <a href='#' >هل نسيت كلمة السر ؟ </a>
            </form>
        </div>
    )
}

export default SignIn
