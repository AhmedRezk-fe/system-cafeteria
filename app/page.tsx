"use client"
import Layout from "@/components/layout/Layout";
import ReferenceUI from "./reference-ui/page";
import useSWR ,{ SWRConfig } from "swr";
import { getRequest } from "@/Api/Api";
import { useEffect } from "react";

export default function Home() {

  return (
    // <SWRConfig>
      <Layout>
        <ReferenceUI />
      </Layout>
    // </SWRConfig>
  );
}
