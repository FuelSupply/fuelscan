import React from "react";
import DataList from "@/components/DataList";
import { queryBlock, queryTxs } from "@/api/index"
import { Block, Transaction, BlockType } from "@/types"
export default async function DataView() {
    const blocks = await queryBlock() as { data: Block[] }
    const txs = await queryTxs() as { data: Transaction[] }
    return <div className="mt-120 container mx-auto flex justify-between">
        <DataList blocks={blocks.data} type={BlockType.Block} />
        <DataList txs={txs.data} type={BlockType.Transaction} />
    </div>
}