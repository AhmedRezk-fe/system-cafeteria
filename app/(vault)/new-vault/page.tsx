"use client";
import Button from "@/components/component-helpers/button";
import Layout from "@/components/layout/Layout";
import Input from "@/components/component-helpers/input";
import { ChangeEvent } from "react";

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
              اضافة مخزن جديد
            </h2>
          </div>
          {/* <div className="btn">
          <Button
            type="button"
            text="Click me"
            //   callback={handelButton}
            itemAction="button"
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.67554 12H19.4367"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0562 18V6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div> */}
        </div>
        <div className="mb-[15px]">

        <Input
          type="text"
          eventInput={handleClick}
          placeholder="1"
          name="n"
          label="الكود"
          placeIcon="start"
        />
        </div>
        <div className="mb-[15px]">

        <Input
          type="text"
          eventInput={handleClick}
          placeholder="ادخل اسم المخزن"
          name="n"
          label="اسم المخزن"
          placeIcon="start"
        />
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
