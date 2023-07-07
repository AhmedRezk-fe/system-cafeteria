"use client";

import Button from "@/components/component-helpers/button";
import Layout from "@/components/layout/Layout";
import BodyTable from "./bodyTable";

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
            مجموعات أصناف البيع{" "}
          </h2>
        </div>
        <div className="btn">
          <Button
            type="button"
            text=" اضافة مجموعة جديدة   "
            callback={handelButton}
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
      <BodyTable />
    </Layout>
  );
};

export default SalesItemGroups;
