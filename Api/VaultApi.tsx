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
