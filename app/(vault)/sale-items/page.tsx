"use client";

import Button from "@/components/component-helpers/button";
import Layout from "@/components/layout/Layout";
import BodyTable from "./bodyTable";
import Select from "@/components/component-helpers/select";
import Input from "@/components/component-helpers/input";
import Image from "next/image";

import Product from '@/components/layout/image/images.jpeg'

const SalesItemGroups = () => {
  const handelButton = () => {
    console.log("click me");
  };
  return (
    <Layout>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className="flex items-center justify-between mt-10 mb-10">
        <div className="title">
          <h2 className="text-[#000024] font-bold text-2xl">
          أصناف البيع{" "}
          </h2>
        </div>
        <div className="btn">
          <Button
            type="button"
            text="العودة لأصناف المخزن"
            callback={handelButton}
            itemAction='add'
          >
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.67578 12H19.437" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.0557 18V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center gap-5">
        <div className="w-full">
          <Input
            type="text"
            placeholder="ابحث بالكود , الصنف"
            name="search"
            placeIcon="start"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                stroke="#626E7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 16.5L15 15"
                stroke="#626E7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Input>
        </div>

        <div className="w-auto min-w-[200px]">
          <input type="date" className="outline-none cursor-default" />
        </div>

        <Button
            type="button"
            text="العودة لأصناف المخزن"
            callback={handelButton}
            itemAction='add'
          />
      </div>
      <BodyTable />
    </Layout>
  );
};

export default SalesItemGroups;
