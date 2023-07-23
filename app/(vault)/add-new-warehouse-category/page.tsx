"use client";
import Button from "@/components/component-helpers/button";
import Layout from "@/components/layout/Layout";
import Input from "@/components/component-helpers/input";
import { ChangeEvent } from "react";
import Select from "@/components/component-helpers/select";

const NewVault = () => {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("element clicked", event.target.value);
  };

  const handelButton = () => {
    console.log("dddss");
  };

  return (
    <Layout>
      <div className="">
        <div className="flex items-center justify-between mt-10 mb-10">
          <div className="title">
            <h2 className="text-[#000024] font-bold text-2xl">
              {" "}
              اضافة صنف مخازن جديد
            </h2>
          </div>
        </div>
        <div className="mb-[15px]">
        <Input
          type="text"
          eventInput={handleClick}
          placeholder="ادخل اسم السنف"
          name="n"
          label="اسم الصنف  "
          placeIcon="start"
        />
        </div>

        <div className="w-auto min-w-[200px]">
          <Select label="القسم" placeholder="اختر القسم" name="categories" />
        </div>

        <div className="w-auto min-w-[200px]">
          <Select label="سعر الشراء" placeholder="ادخل اسعر الشراء" name="categories" />
        </div>

        <div className="my-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">وصف الصنف</label>
          <textarea id="message" rows="6" cols='6' className="block p-2.5 w-full max-h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none" placeholder="ادخل وصف الصنف"></textarea>
        </div>

        <div className="flex items-center flex-col justify-center w-full">
          <p className="text-start mb-4 w-full">اضافة صورة للقسم</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2497 25.8333C26.1031 25.8333 28.4163 23.5201 28.4163 20.6667C28.4163 17.8132 26.1031 15.5 23.2497 15.5C20.3962 15.5 18.083 17.8132 18.083 20.6667C18.083 23.5201 20.3962 25.8333 23.2497 25.8333Z" stroke="#1664B8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33.5837 5.1665H23.2503C10.3337 5.1665 5.16699 10.3332 5.16699 23.2498V38.7498C5.16699 51.6665 10.3337 56.8332 23.2503 56.8332H38.7503C51.667 56.8332 56.8337 51.6665 56.8337 38.7498V25.8332" stroke="#1664B8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40.6875 12.9165H54.8958" stroke="#1664B8" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M47.792 20.0208V5.8125" stroke="#1664B8" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M6.89746 48.9543L19.6333 40.4034C21.6741 39.0343 24.6191 39.1893 26.4533 40.7651L27.3058 41.5143C29.3208 43.2451 32.5758 43.2451 34.5908 41.5143L45.3375 32.2918C47.3525 30.5609 50.6075 30.5609 52.6225 32.2918L56.8333 35.9084" stroke="#1664B8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">اسحب الصورة واسقطها هنا او قم بتحميلها <span className="font-semibold">من هنا</span></p>
              <p className="text-sm text-gray-500 dark:text-gray-400">يفضل ان تكون الصورة بصيفة  JPG & JPEG & PNG والا يزيد الحجم عن 2 MB</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <div className="flex items-center my-4">
          <input id="default-checkbox" type="checkbox" className="cursor-pointer me-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="default-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">تنبية للعنصر عند وصولة على وشك النفاذ</label>
        </div>

        <div className="flex gap-4 mt-8">

          <Button
            type="button"
            text="حفظ"
            callback={handelButton}
            itemAction="button"
          />

          <Button
            type="button"
            text="الغاء"
            callback={handelButton}
          // itemAction="button"
          />
        </div>
      </div>
    </Layout>
  );
};

export default NewVault;
