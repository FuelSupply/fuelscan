import React from "react";
import Blocks from "@/views/Blocks"
import { queryBlock } from "@/api"
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
    
    const blocks = await queryBlock(searchParams)

    return <Blocks blocks={blocks} searchParams={searchParams} />
}