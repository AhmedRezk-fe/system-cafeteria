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
              اضافة وحدة جديدة
            </h2>
          </div>
        </div>
        <div className="mb-[15px]">
          <Input
            type="text"
            eventInput={handleClick}
            placeholder="ادخل اسم الوحدة"
            name="n"
            label="اسم الوحدة"
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
        </div>
      </div>
    </Layout>
  );
};

export default NewVault;
