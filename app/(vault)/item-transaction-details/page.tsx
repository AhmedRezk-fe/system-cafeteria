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
          تفاصيل حركة الصنف{" "}
          </h2>
        </div>
        <div className="btn">
          <Button
            type="button"
            text="العودة لأصناف المخزن"
            callback={handelButton}
          />
        </div>
      </div>

      <div className="bg-50 my-6 flex justify-between">
        <div className="flex">
          <div className="me-4">
            <Image src={Product} width={300} height={50} alt="product" />
          </div>
          <div>
            <p className="font-mediem text-3xl w-[400px] pb-2 leading-10">الارز</p>
            <span className="mb-5 block">قسم المأكولات والمشروبات</span>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="me-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1665 11.1668V13.6668C14.1665 17.0002 12.8332 18.3335 9.49984 18.3335H6.33317C2.99984 18.3335 1.6665 17.0002 1.6665 13.6668V10.5002C1.6665 7.16683 2.99984 5.8335 6.33317 5.8335H8.83317" stroke="#626E7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.1668 11.1668H11.5002C9.50016 11.1668 8.8335 10.5002 8.8335 8.50016V5.8335L14.1668 11.1668Z" stroke="#626E7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.6665 1.6665H12.9998" stroke="#626E7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.8335 4.1665C5.8335 2.78317 6.95016 1.6665 8.3335 1.6665H10.5168" stroke="#626E7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3334 6.6665V11.8248C18.3334 13.1165 17.2834 14.1665 15.9917 14.1665" stroke="#626E7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3335 6.6665H15.8335C13.9585 6.6665 13.3335 6.0415 13.3335 4.1665V1.6665L18.3335 6.6665Z" stroke="#626E7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-400 text-sm">سعر الشراء :  </span>
                <span className="font-bold">25 ج . م</span>
              </div>
            </div>
          </div>
        </div>

        <div className="btn flex">
        <div className="me-2">
          <Button
            type="button"
            text="اضافة مخزن جديد"
            callback={handelButton}
            itemAction="add"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1333C3.23329 15.1083 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.9082 4.2085C10.2665 6.5085 12.1332 8.26683 14.4499 8.50016" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.5 18.3335H17.5" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
        </div>

          <Button
            type="button"
            text="حذف"
            callback={handelButton}
            itemAction="delete"
          />
        </div>
      </div>

      <div className="bg-50 my-6 flex">

        <div className="flex items-center h-[105px] w-[550px] p-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#3D9635" />
            <path d="M22.7516 28.8604V30.8904C22.7516 32.6104 21.1516 34.0004 19.1816 34.0004C17.2116 34.0004 15.6016 32.6104 15.6016 30.8904V28.8604C15.6016 30.5804 17.2016 31.8004 19.1816 31.8004C21.1516 31.8004 22.7516 30.5704 22.7516 28.8604Z" stroke="#3D9635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.7498 26.1097C22.7498 26.6097 22.6098 27.0697 22.3698 27.4697C21.7798 28.4397 20.5698 29.0497 19.1698 29.0497C17.7698 29.0497 16.5598 28.4297 15.9698 27.4697C15.7298 27.0697 15.5898 26.6097 15.5898 26.1097C15.5898 25.2497 15.9898 24.4797 16.6298 23.9197C17.2798 23.3497 18.1698 23.0098 19.1598 23.0098C20.1498 23.0098 21.0398 23.3597 21.6898 23.9197C22.3498 24.4697 22.7498 25.2497 22.7498 26.1097Z" stroke="#3D9635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.7516 26.11V28.86C22.7516 30.58 21.1516 31.8 19.1816 31.8C17.2116 31.8 15.6016 30.57 15.6016 28.86V26.11C15.6016 24.39 17.2016 23 19.1816 23C20.1716 23 21.0616 23.35 21.7116 23.91C22.3516 24.47 22.7516 25.25 22.7516 26.11Z" stroke="#3D9635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.0002 22.9702V25.0302C34.0002 25.5802 33.5602 26.0302 33.0002 26.0502H31.0402C29.9602 26.0502 28.9702 25.2602 28.8802 24.1802C28.8202 23.5502 29.0602 22.9602 29.4802 22.5502C29.8502 22.1702 30.3602 21.9502 30.9202 21.9502H33.0002C33.5602 21.9702 34.0002 22.4202 34.0002 22.9702Z" stroke="#3D9635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 22.5V20.5C14 17.78 15.64 15.88 18.19 15.56C18.45 15.52 18.72 15.5 19 15.5H28C28.26 15.5 28.51 15.51 28.75 15.55C31.33 15.85 33 17.76 33 20.5V21.95H30.92C30.36 21.95 29.85 22.17 29.48 22.55C29.06 22.96 28.82 23.55 28.88 24.18C28.97 25.26 29.96 26.05 31.04 26.05H33V27.5C33 30.5 31 32.5 28 32.5H25.5" stroke="#3D9635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div className="ms-6 leading-10">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p className="font-bold text-lg">250.000 ج.م</p>
          </div>

        </div>

        <div className="flex items-center h-[105px] w-[550px] p-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#1664B8" />
            <path d="M31.5 22.2202V31.0002C31.5 33.0002 31 34.0002 28.5 34.0002H19.5C17 34.0002 16.5 33.0002 16.5 31.0002V22.2202" stroke="#1664B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 14H31C33 14 34 15 34 17V19C34 21 33 22 31 22H17C15 22 14 21 14 19V17C14 15 15 14 17 14Z" stroke="#1664B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.1797 26H25.8197" stroke="#1664B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div className="ms-6 leading-10">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p className="font-bold text-lg">2500 كجم</p>
          </div>

        </div>
      </div>

        <>
          <h3 className="mb-4 font-bold text-xl">حركات الشراء والبيع</h3>
          <div className="flex justify-between items-center gap-5">
            <div className="w-full">
              <Input
                type="text"
                placeholder="ابحث باسم المخزن ......"
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
              <Select placeholder="كل الاقسام" name="categories" />
            </div>
          </div>
        </>
      <BodyTable />
    </Layout>
  );
};

export default SalesItemGroups;
