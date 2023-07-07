"use client"
import { ChangeEvent, FormEvent, useState } from "react";
// import Image from "next/image";
// import Logo from '../../image/Cisco-logo.png'
import axios from "axios";
import useSWR from "swr"

export default function Home() {
  const [datauser , setDatauser] = useState({})

  const URL = process.env.API_URL;
  axios.defaults.baseURL = URL
  const submitDataUser = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
      const res = await axios.post("https://cafe.highdam-sk.com/api/login",datauser )
      console.log(res)
  }
  const {data , error } = useSWR("/login" , url => {
    return axios.post(url,datauser).then(r => r.data)
  })

  const handelInput = (e:ChangeEvent<HTMLInputElement>)=>{
    
    setDatauser({...datauser , [e.target.name]:e.target.value})
  }

  return (
    <section className="flex items-center justify-center  bg-Gainsboro h-screen">
      <div className="text-center mx-auto bg-white rounded-lg p-16 max-w-[698px] w-full">
        <div className="w-40 mx-auto mb-5">
          {/* <Image src={Logo} alt='Logo' /> */}
        </div>
        <form onSubmit={submitDataUser}>
          <h2 className="mb-5 text-2xl font-bold">تسجيل الدخول</h2>
          <div className="flex flex-col">
            <div className="mb-5">
              <input
                type="text"
                name="phone"
                placeholder="phone"
                onChange={handelInput}
                className="bg-white border border-borderInpur text-gray-900 text-sm rounded-8 h-[44px] focus:ring-Denim focus:border-Denim block w-full  px-2.5  outline-none"
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handelInput}
                className="bg-white border border-borderInpur text-gray-900 text-sm rounded-8 h-[44px] focus:ring-Denim focus:border-Denim block w-full  px-2.5  outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="desk">نسيت كلمة المرور ؟</p>
            <div className="flex items-center justify-center my-5">
              <label htmlFor="" className="me-2">
                تذكرني
              </label>
              <input type="checkbox" className="cursor-pointer" />
            </div>
          </div>

          <button className="bg-Denim rounded-xl text-xl font-bold text-white w-full py-2">
            تسجيل الدخول
          </button>

          <div className="flex items-center justify-center mt-5 text-[18px]">
            <a href="/" className="text-Denim me-2">
              انشاء حساب جديد
            </a>
            <p>ليس لديك حساب بعد ؟</p>
          </div>
        </form>
      </div>
    </section>
  );
}
