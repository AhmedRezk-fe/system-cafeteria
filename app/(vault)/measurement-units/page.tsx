"use client";
import Button from "@/components/component-helpers/button";
import Input from "@/components/component-helpers/input";
import Layout from "@/components/layout/Layout";
import Table from "@/components/tabel";
import { ChangeEvent } from "react";

const MeasurementUnits = () => {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("element clicked", event.target.value);
  };
  return (
    <Layout>
      <div className="flex items-center justify-between mt-10 mb-10">
        <div className="title">
          <h2 className="text-[#000024] font-bold text-2xl">وحدات القياس</h2>
        </div>
        <div className="btn">
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
        </div>
      </div>
      <form action="">
        <Input
          type="text"
          eventInput={handleClick}
          placeholder="ابحث بالكود , الوحدة"
          name="n"
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
      </form>
      <Table>
          <>
            <th>الرقم</th>
            <th>الكود</th>
            <th>اسم المجموعة</th>
            <th>عدد أصناف البيع</th>
            <th>التحكم</th>
          </>
        </Table>
    </Layout>
  );
};

export default MeasurementUnits;
