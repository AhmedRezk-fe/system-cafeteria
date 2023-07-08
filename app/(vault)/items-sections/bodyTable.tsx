"use client";
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

type TableProps = {
  data?: any;
};

const BodyTable: FunctionComponent<TableProps> = ({  data }) => {
  const iniData = [
    {
      id: 1,
      th1: "value1",
      th2: "text 1",
      th3: "value1",
      th4: "text 1",
    },
    {
      id: 2,
      th1: "value2",
      th2: "text 2",
      th3: "value2",
      th4: "text 2",
    },
    {
      id: 3,
      th1: "value3",
      th2: "text 3",
      th3: "value3",
      th4: "text 3",
    },
  ];

  const [dataTable, setDataTable] = useState(iniData);
  useEffect(() => {
    if (data) {
      setDataTable(data);
    }
  }, [data]);
  return (
    <table className="shadow-table overflow-hidden rounded-8">
      <thead>
        <tr className="bg-200 text-100">
        <th>الرقم</th>
            <th>الكود</th>
            <th>اسم المجموعة</th>
            <th>عدد أصناف البيع</th>
            <th>التحكم</th>
            
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2154202 #</td>
          <td>مجموعة اصناف 1</td>
          <td>250</td>
          <td>
            <ul className="flex">
              <li className="m-2">
                <span className="cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z"
                      stroke="#3D9635"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li className="m-2">
                <span className="cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
                      stroke="#D6534A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BodyTable;
