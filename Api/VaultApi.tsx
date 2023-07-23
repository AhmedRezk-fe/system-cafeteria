import useSWR from "swr"
import { getRequest } from "./Api"
export const gitStores = ()=> {
    const { data, error, isLoading } = useSWR(`/warehouses`, getRequest)
    return {
      user: data,
      isLoading,
      isError: error
    }
  }

  // export const deleteStores = (id:number)=> {
  //   const { data, error, isLoading } = useSWR(`/warehouses`, )
  //   return {
  //     user: data,
  //     isLoading,
  //     isError: error
  //   }
  // }
