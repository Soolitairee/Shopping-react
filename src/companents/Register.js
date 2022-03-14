import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const onSubmit = (datas) => {
        axios.post("http://localhost:3004/Arr", datas)
            .then(res => res.data)
            .then(res => console.log(res))
        reset()

    }

    return (
        <div className='Reg'>
            <div className="reg-yer">
                <h1>Qeydiyyat</h1>
                <div className='err-reg' >
                </div>
                <form className='regs' onSubmit={handleSubmit(onSubmit)} action="">
                    <label htmlFor="ad">

                        <input  {...register("ad", { required: true, minLength: 3, maxLength: 15, pattern: /^[A-Za-z]+$/i })} className='inpreg' type="text" name='ad' placeholder='Ad' id='ad' />
                        {errors.ad?.type === "required" && <p style={{ color: "red" }}>Adınızı qeyd edin</p>}
                        {errors.ad?.type === "pattern" && <p style={{ color: "red" }}>Rəqəm daxil etmək olmaz.</p>}
                        {errors.ad?.type === "minLength" && <p style={{ color: "red" }}>Adınız çox qısadır.'</p>}
                        {errors.ad?.type === "maxLength" && <p style={{ color: "red" }}>Adınız cox uzundur</p>}
                    </label>
                    <label htmlFor="soyad">

                        <input {...register("soyad", { required: true, minLength: 3, maxLength: 15, pattern: /^[A-Za-z]+$/i })} className='inpreg' type="text" name='soyad' placeholder='Soyad' id='soyad' />
                        {errors.soyad?.type === "required" && <p style={{ color: "red" }}>Soyadınızı qeyd edin.</p>}
                        {errors.soyad?.type === "pattern" && <p style={{ color: "red" }}> Rəqəm daxil etmək olmaz.</p>}
                        {errors.soyad?.type === "minLength" && <p style={{ color: "red" }}>Soyadınız çox qısadır </p>}
                        {errors.soyad?.type === "maxLength" && <p style={{ color: "red" }}>Soyadınız cox uzundur </p>}
                    </label>
                    <label htmlFor="email">

                        <input  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className='inpreg' type="text" name='email' placeholder='Email' id='email' />
                        {errors.email?.type === "required" && <p style={{ color: "red" }}>Boş saxlamaq olmaz</p>}
                    {errors.email?.type === "pattern" && <p style={{ color: "red" }}>Mailinizi düzgün daxil edin</p>}
                    </label>
                    
                    <label htmlFor="parol">

                        <input {...register("parol", { required: true, minLength: 3, maxLength: 15 })}  type="text" name='parol' placeholder='Şifrə' id='parol' className='inpreg' />
                        {errors.parol?.type === "required" && <p style={{ color: "red" }}>Boş saxlamaq olmaz</p>}
                        {errors.parol?.type === "minLength" && <p style={{ color: "red" }}>Şifrəniz çox qısadır</p>}
                        {errors.parol?.type === "maxLength" && <p style={{ color: "red" }}>Şifrəniz çox uzundur</p>}
                    </label>
                    <label htmlFor="nomre">
                        <input {...register("nomre",{required:true})} name="nomre"  type="number" placeholder='Nömrəniz'  className='inpreg'/>    
                        {errors.nomre?.type === "valueAsNumber" && <p style={{ color: "red" }}>Nömrənizi düzgen qeyd edin</p>}
                        {errors.nomre?.type === "required" && <p style={{ color: "red" }}>Boş saxlamaq olmaz</p>}
                    </label>

                    
                   
                    <label  className='gend'  htmlFor="gender">
                        <select  name="gender" id="">
                          <option value="1">Kişi</option>  
                          <option value="2">Qadın</option>  
                        </select>
                    </label>
                  
                    <div className='inpregbtn'>
                        <input type="submit" value={"Göndər"} name="" id="" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register