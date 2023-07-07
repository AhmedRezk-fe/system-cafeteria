"use client";

import Button from "@/components/component-helpers/button";
import Layout from "@/components/layout/Layout";
import BodyTable from "./bodyTable";
import Select from "@/components/component-helpers/select";
import Input from "@/components/component-helpers/input";

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
          بيانات المخزن{" "}
          </h2>
        </div>
        <div className="btn">
          <Button
            type="button"
            text="العودة"
            callback={handelButton}
          />
        </div>
      </div>

      <div className="bg-50 my-6 flex justify-between">
        <div className="">
          <div className="">
            <p className="font-mediem text-3xl w-[400px] pb-2 leading-10">المخزن الرئيسي 1 الخاص بالمنتجات المهمة</p>
            <span className="mb-5 block">21548522</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center me-8">
              <span className="me-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6665 1.6665V4.1665" stroke="#5E6E77" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3335 1.6665V4.1665" stroke="#5E6E77" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.9165 7.5752H17.0832" stroke="#5E6E77" strokeWidth="1.2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 7.08317V14.1665C17.5 16.6665 16.25 18.3332 13.3333 18.3332H6.66667C3.75 18.3332 2.5 16.6665 2.5 14.1665V7.08317C2.5 4.58317 3.75 2.9165 6.66667 2.9165H13.3333C16.25 2.9165 17.5 4.58317 17.5 7.08317Z" stroke="#5E6E77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.99607 11.4167H10.0036" stroke="#5E6E77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.91209 11.4167H6.91957" stroke="#5E6E77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.91209 13.9167H6.91957" stroke="#5E6E77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-400 text-sm">تاريخ الاضافة : </span>
              <span className="font-bold">22 مايو, 2023</span>
            </div>

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
              <span className="text-400 text-sm">اجمالى عدد الاصناف: </span>
              <span className="font-bold">40</span>
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

      <div className="bg-50 my-6 flex justify-between">
      <div className="flex items-center h-[105px] w-[200px] p-4">
          <div className="">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p>120</p>
          </div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#3D9635" />
            <path d="M27.5 25.15H25.33C23.55 25.15 22.1 23.71 22.1 21.92V19.75C22.1 19.34 21.77 19 21.35 19H18.18C15.87 19 14 20.5 14 23.18V29.82C14 32.5 15.87 34 18.18 34H24.07C26.38 34 28.25 32.5 28.25 29.82V25.9C28.25 25.48 27.91 25.15 27.5 25.15Z" fill="#3D9635" />
            <path d="M29.8198 14H27.8498H26.7598H23.9298C21.6698 14 19.8398 15.44 19.7598 18.01C19.8198 18.01 19.8698 18 19.9298 18H22.7598H23.8498H25.8198C28.1298 18 29.9998 19.5 29.9998 22.18V24.15V26.86V28.83C29.9998 28.89 29.9898 28.94 29.9898 28.99C32.2198 28.92 33.9998 27.44 33.9998 24.83V22.86V20.15V18.18C33.9998 15.5 32.1298 14 29.8198 14Z" fill="#3D9635" />
            <path d="M23.9801 19.1502C23.6701 18.8402 23.1401 19.0502 23.1401 19.4802V22.1002C23.1401 23.2002 24.0701 24.1002 25.2101 24.1002C25.9201 24.1102 26.9101 24.1102 27.7601 24.1102C28.1901 24.1102 28.4101 23.6102 28.1101 23.3102C27.0201 22.2202 25.0801 20.2702 23.9801 19.1502Z" fill="#3D9635" />
          </svg>
        </div>

      <div className="flex items-center h-[105px] w-[200px] p-4">
          <div className="">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p>120</p>
          </div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#1664B8" />
            <path d="M28.19 14H19.81C16.17 14 14 16.17 14 19.81V28.19C14 31.83 16.17 34 19.81 34H28.19C31.83 34 34 31.83 34 28.19V19.81C34 16.17 31.83 14 28.19 14ZM21.97 26.9L19.72 29.15C19.57 29.3 19.38 29.37 19.19 29.37C19 29.37 18.8 29.3 18.66 29.15L17.91 28.4C17.61 28.11 17.61 27.63 17.91 27.34C18.2 27.05 18.67 27.05 18.97 27.34L19.19 27.56L20.91 25.84C21.2 25.55 21.67 25.55 21.97 25.84C22.26 26.13 22.26 26.61 21.97 26.9ZM21.97 19.9L19.72 22.15C19.57 22.3 19.38 22.37 19.19 22.37C19 22.37 18.8 22.3 18.66 22.15L17.91 21.4C17.61 21.11 17.61 20.63 17.91 20.34C18.2 20.05 18.67 20.05 18.97 20.34L19.19 20.56L20.91 18.84C21.2 18.55 21.67 18.55 21.97 18.84C22.26 19.13 22.26 19.61 21.97 19.9ZM29.56 28.62H24.31C23.9 28.62 23.56 28.28 23.56 27.87C23.56 27.46 23.9 27.12 24.31 27.12H29.56C29.98 27.12 30.31 27.46 30.31 27.87C30.31 28.28 29.98 28.62 29.56 28.62ZM29.56 21.62H24.31C23.9 21.62 23.56 21.28 23.56 20.87C23.56 20.46 23.9 20.12 24.31 20.12H29.56C29.98 20.12 30.31 20.46 30.31 20.87C30.31 21.28 29.98 21.62 29.56 21.62Z" fill="#1664B8" />
          </svg>
        </div>

        <div className="flex items-center h-[105px] w-[200px] p-4">
          <div className="">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p>120</p>
          </div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#E62FC9" />
            <path d="M26.3498 14H21.6498C20.6098 14 19.7598 14.84 19.7598 15.88V16.82C19.7598 17.86 20.5998 18.7 21.6398 18.7H26.3498C27.3898 18.7 28.2298 17.86 28.2298 16.82V15.88C28.2398 14.84 27.3898 14 26.3498 14Z" fill="#E62FC9" />
            <path d="M29.24 16.82C29.24 18.41 27.94 19.71 26.35 19.71H21.65C20.06 19.71 18.76 18.41 18.76 16.82C18.76 16.26 18.16 15.91 17.66 16.17C16.25 16.92 15.29 18.41 15.29 20.12V29.53C15.29 31.99 17.3 34 19.76 34H28.24C30.7 34 32.71 31.99 32.71 29.53V20.12C32.71 18.41 31.75 16.92 30.34 16.17C29.84 15.91 29.24 16.26 29.24 16.82ZM27.34 24.73L23.34 28.73C23.19 28.88 23 28.95 22.81 28.95C22.62 28.95 22.43 28.88 22.28 28.73L20.78 27.23C20.49 26.94 20.49 26.46 20.78 26.17C21.07 25.88 21.55 25.88 21.84 26.17L22.81 27.14L26.28 23.67C26.57 23.38 27.05 23.38 27.34 23.67C27.63 23.96 27.63 24.44 27.34 24.73Z" fill="#E62FC9" />
          </svg>
        </div>

        <div className="flex items-center h-[105px] w-[200px] p-4">
          <div className="">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p>120</p>
          </div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#D6534A" />
            <path d="M26.3498 14H21.6498C20.6098 14 19.7598 14.84 19.7598 15.88V16.82C19.7598 17.86 20.5998 18.7 21.6398 18.7H26.3498C27.3898 18.7 28.2298 17.86 28.2298 16.82V15.88C28.2398 14.84 27.3898 14 26.3498 14Z" fill="#D6534A" />
            <path d="M29.24 16.82C29.24 18.41 27.94 19.71 26.35 19.71H21.65C20.06 19.71 18.76 18.41 18.76 16.82C18.76 16.26 18.16 15.91 17.66 16.17C16.25 16.92 15.29 18.41 15.29 20.12V29.53C15.29 31.99 17.3 34 19.76 34H28.24C30.7 34 32.71 31.99 32.71 29.53V20.12C32.71 18.41 31.75 16.92 30.34 16.17C29.84 15.91 29.24 16.26 29.24 16.82ZM27.53 29.53C27.38 29.68 27.19 29.75 27 29.75C26.81 29.75 26.62 29.68 26.47 29.53L21.75 24.81V26C21.75 26.41 21.41 26.75 21 26.75C20.59 26.75 20.25 26.41 20.25 26V23C20.25 22.59 20.59 22.25 21 22.25H24C24.41 22.25 24.75 22.59 24.75 23C24.75 23.41 24.41 23.75 24 23.75H22.81L27.53 28.47C27.82 28.76 27.82 29.24 27.53 29.53Z" fill="#D6534A" />
          </svg>
        </div>

        <div className="flex items-center h-[105px] w-[200px] p-4">
          <div className="">
            <p>اجمالى عدد فواتير مرتجعات البيع</p>
            <p>120</p>
          </div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="#1CB9F7" />
            <svg x='25%' y='25%' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="#1CB9F7" />
              <path d="M17.24 4.81998C17.24 6.40998 15.94 7.70998 14.35 7.70998H9.65004C8.06004 7.70998 6.76004 6.40998 6.76004 4.81998C6.76004 4.25998 6.16004 3.90998 5.66004 4.16998C4.25004 4.91998 3.29004 6.40998 3.29004 8.11998V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.11998C20.71 6.40998 19.75 4.91998 18.34 4.16998C17.84 3.90998 17.24 4.25998 17.24 4.81998ZM15.75 17C15.75 17.41 15.41 17.75 15 17.75H12C11.59 17.75 11.25 17.41 11.25 17C11.25 16.59 11.59 16.25 12 16.25H13.19L8.47004 11.53C8.18004 11.24 8.18004 10.76 8.47004 10.47C8.76004 10.18 9.24004 10.18 9.53004 10.47L14.25 15.19V14C14.25 13.59 14.59 13.25 15 13.25C15.41 13.25 15.75 13.59 15.75 14V17Z" fill="#1CB9F7" />
            </svg>
          </svg>
        </div>
      </div>

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
      <BodyTable />
    </Layout>
  );
};

export default SalesItemGroups;
