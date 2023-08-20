"use client"
import { BlockDetail } from "@/types";
import { timeFormat } from "@/utils";
import React, { useEffect } from "react";

export default function Block({ blockDetail }: { blockDetail: BlockDetail }) {
    useEffect(() => {
        console.log(blockDetail);
    })

    return <div className="container mx-auto mt-20">
        <div>
            <span className="mr-10 text-2xl">
                Block
            </span>
            <span className="text-gray"># {blockDetail.height}</span>
        </div>
        <div className="p-20 mt-20 bg-white border rounded-md shadow-md border-light-gray">

            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Block Height:
                </div>
                <div>
                    {blockDetail.height}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    L1:
                </div>
                <div>
                    {blockDetail.da_height}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Timestamp:
                </div>
                <div>
                    {timeFormat(blockDetail.timestamp)}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Prevent Root:
                </div>
                <div>
                    {blockDetail.prev_root}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Hash
                </div>
                <div>
                    {blockDetail.id}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Transactions:
                </div>
                <div className="flex items-center">
                    <div className="mr-5 text-center rounded-lg cursor-pointer text-steel-blue w-120 bg-off-white">
                        {blockDetail.transactions.length}
                        transactions
                    </div>
                    in this block
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Transactions Root:
                </div>
                <div>
                    {blockDetail.transactions_root}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Coinbase
                </div>
                <div>
                    {blockDetail.coinbase}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Coinbase Amount
                </div>
                <div>
                    {blockDetail.coinbase_amount}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Coinbase Hash
                </div>
                <div>
                    {blockDetail.coinbase_hash}
                </div>
            </div>
            <div className="flex border-b item-center border-light-gray pt-15 pb-15">
                <div className="w-1/4">
                    Output Messages Root Hash
                </div>
                <div>
                    {blockDetail.output_messages_root_hash}
                </div>
            </div>

        </div>
    </div>
}