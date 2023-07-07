"use client";
import Button from "@/components/component-helpers/button";
import Input from "@/components/component-helpers/input";
import Select from "@/components/component-helpers/select";
import Table from "@/components/tabel";
import { ChangeEvent } from "react";

const ReferenceUI = () => {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("element clicked", event.target.value);
  };

  const handelButton = () => {
    console.log("dddss");
  };

  const handelSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("element clicked", event.target.value);
  };
  return (
    <>
      <form action="">
        {/* input */}

        <Input
          type="text"
          eventInput={handleClick}
          placeholder="name"
          name="n"
          label="المبيعات"
          placeIcon="start"
          error="you have no error :)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19 8.24C19 8.79 18.55 9.24 18 9.24H16C15.59 9.24 15.25 9.58 15.25 9.99C15.25 10.41 15.59 10.74 16 10.74H18C18.55 10.74 19 11.19 19 11.74V12.25C19 12.8 18.55 13.25 18 13.25H16C15.59 13.25 15.25 13.59 15.25 14C15.25 14.41 15.59 14.75 16 14.75H18C18.55 14.75 19 15.2 19 15.75V16C19 17.66 17.66 19 16 19H8C6.34 19 5 17.66 5 16V15.5C5 14.95 5.45 14.5 6 14.5H7.48C8.95 14.5 10.12 13.24 9.97 11.74C9.84 10.44 8.65 9.5 7.34 9.5H6C5.45 9.5 5 9.05 5 8.5V8C5 6.34 6.34 5 8 5H16C17.66 5 19 6.34 19 8V8.24ZM5 12C5 11.45 5.45 11 6 11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13H6C5.45 13 5 12.55 5 12Z"
              fill="#CFD9E6"
            />
          </svg>
        </Input>

        {/* select */}

        <Select
          name="select"
          placeholder="select placeholder"
          eventSelect={handelSelect}
        />

        {/* button */}

        <Button
          type="button"
          text="Click me"
          callback={handelButton}
          itemAction="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1333C3.23329 15.1083 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z"
              stroke="white"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.9082 4.2085C10.2665 6.5085 12.1332 8.26683 14.4499 8.50016"
              stroke="white"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 18.3335H17.5"
              stroke="white"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        {/* table */}

        <Table>
          <>
            <th>الرقم</th>
            <th>الكود</th>
            <th>اسم المجموعة</th>
            <th>عدد أصناف البيع</th>
            <th>التحكم</th>
          </>
        </Table>
      </form>
    </>
  );
};

export default ReferenceUI;
