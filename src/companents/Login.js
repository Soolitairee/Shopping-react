import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
function Login() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();




  const OnSubmit = (datas) => {
    axios.post("http://localhost:3004/Arr", datas)
      .then(res => res.data)
      .then(res => console.log(res))
      reset()

  }
  return (
    <div className='Log'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(OnSubmit)} className='Login' action="">
        <label htmlFor="email">
          <input  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className='inglog' type="text" name='email' id='ad' placeholder='Email' />
          {errors.email?.type === "required" && <p style={{ color: "red" }}>Mailinizi daxil edin</p>}
          {errors.email?.type === "pattern" && <p style={{ color: "red" }}>Mailinizi duzgun daxil edin</p>}
        </label>
        <label htmlFor="parol">
          <input {...register("parol", { required: true, minLength: 6, maxLength: 12 })} className='inglog inplog2' type="password" name='parol' placeholder='parol' /></label>
        {errors.parol?.type === "required" && <p style={{ color: "red" }}>Parolunuzu daxil edin</p>}
        {errors.parol?.type === "minLength" && <p style={{ color: "red" }}>Parolunuz cox qisadir</p>}
        {errors.parol?.type === "maxLength" && <p style={{ color: "red" }}>Parolunuz cox uzundur</p>}
        <input className='logbtn' value={"create"} type="submit" />
      </form>
      <div className='xosh'>
        <h1>XOŞ Gəlmisiniz!</h1>
      </div>
      
    </div>
  )
}

export default Login