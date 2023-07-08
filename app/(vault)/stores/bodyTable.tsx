"use client";
import { deleteRequest } from "@/Api/Api";
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

type TableProps = {
  dataTable?: object;
};

const BodyTable: FunctionComponent<TableProps> = ({ dataTable }) => {
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

  const [dataTableComponent, setDataTableComponent] = useState<object>(iniData);
  useEffect(() => {
    if (dataTable) {
      setDataTableComponent(dataTable);
    }
  }, [dataTable]);
// delete item store
const deleteStore = (id:number) => {
  deleteRequest("warehouses",id)
}


  return (
    <table className="shadow-table overflow-hidden rounded-8">
      <thead>
        <tr className="bg-200 text-100">
          <th>الرقم</th>
          <th>الكود</th>
          <th>اسم المخزن</th>
          {/* <th>عدد أصناف البيع</th> */}
          <th>التحكم</th>
        </tr>
      </thead>
      <tbody>
        {dataTableComponent?.data?.map((itemTR) => {
          return (
            <tr key={itemTR.id}>
              <td>{itemTR.id}</td>
              <td># {itemTR?.translations?.code}</td>
              <td>{itemTR?.translations?.name_ar}</td>
              {/* <td>250</td> */}
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
                          d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z"
                          stroke="#1664B8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.45801 12C3.73228 7.94288 7.52257 5 12.0002 5C16.4778 5 20.2681 7.94291 21.5424 12C20.2681 16.0571 16.4778 19 12.0002 19C7.52256 19 3.73226 16.0571 2.45801 12Z"
                          stroke="#1664B8"
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
                    <span className="cursor-pointer" onClick={()=> deleteStore(itemTR.id)}>
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
          );
        })}
      </tbody>
    </table>
  );
};

export default BodyTable;
