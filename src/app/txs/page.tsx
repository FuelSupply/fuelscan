import React from "react";
import Txs from "@/views/Txs"
import { queryTxs } from "@/api"
import { Pagination } from "@/types";

export default async function BlocksServer({
    searchParams,
}: {
    searchParams: Pagination
}) {
    if (!searchParams.current) {
        searchParams.current = "1"
    }

    if (!searchParams.pageSize) {
        searchParams.pageSize = "10"
    }
    
    const txs = await queryTxs(searchParams)

    return <Txs txs={txs} searchParams={searchParams} />
}