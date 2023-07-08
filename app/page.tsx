"use client"
import Layout from "@/components/layout/Layout";
import ReferenceUI from "./reference-ui/page";
import useSWR ,{ SWRConfig } from "swr";
import { getRequest } from "@/Api/Api";
import { useEffect } from "react";

export default function Home() {
  const gitData = ()=> {
    const { data, error, isLoading } = useSWR(`/warehouses`, getRequest)
 
    return {
      user: data,
      isLoading,
      isError: error
    }
  }
  console.log(gitData())
  return (
    // <SWRConfig>
      <Layout>
        <ReferenceUI />
      </Layout>
    // </SWRConfig>
  );
}
