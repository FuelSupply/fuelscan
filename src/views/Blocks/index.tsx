"use client"
import { timeFormat } from "@/utils";
import React, { useCallback, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs"
import { AiOutlineCopy } from "react-icons/ai"
import { Block } from "@/types";
import Link from "next/link";
import { Tooltip } from 'antd';
import { copyToClipboard } from "@/utils"
export default function Block({ blocks }: { blocks: Block[] }) {

    useEffect(() => {
        console.log("blocks----", blocks);
    })

    const renderBlocks = useCallback(() => {
        return blocks.map(v => (
            <div key={v.id} className="flex items-center justify-between text-sm border-b rounded-md border-light-gray h-60">
                <div className="w-[5%]">
                    <Link className="text-dark-blue" href={`/block/${v.id}`}>{v.height}</Link>
                </div>
                <div className="w-[8%]">{timeFormat(v.timestamp)}</div>
                <Link className="text-dark-blue" href={`/block/${v.id}`}>
                    <div className="w-[3%] text-dark-blue">{v.transaction_count}</div>
                </Link>
                <div className="w-[5%]">{v.da_height}</div>
                <div className="w-[20%] flex items-center">
                    <Tooltip title={v.id} className="w-full">
                        <span className="flex-1 truncate" > {v.id}</span>
                    </Tooltip>
                    <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.id)} />
                </div>
                <div className="w-[10%] text-center">{v.coinbase_amount}</div>
                <div className="w-[20%] flex items-center">
                    <Tooltip title={v.coinbase} className="w-full">
                        <span className="flex-1 truncate" > {v.coinbase}</span>
                    </Tooltip>
                    <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.coinbase)} />
                </div>
            </div>
        ))
    }, [blocks])

    return <div className="container mx-auto mt-20">
        <div>
            <span className="mr-10 text-2xl">
                Blocks
            </span>
        </div>

        <div className="flex justify-between mt-20">
            <div className="border rounded-xl border-light-gray h-80 w-[24%] bg-white p-15 cursor-pointer">
                <div className="flex items-center justify-between group">
                    <div className="text-gray">
                        Total Blocks
                    </div>
                    <BsArrowUpRight className="text-sm text-[#333] hidden group-hover:block" />
                </div>
                <div className="text-xl hover:text-dark-blue">170222</div>
            </div>
            <div className="border rounded-xl border-light-gray h-80 w-[24%] bg-white p-15 cursor-pointer">
                <div className="flex items-center justify-between group">
                    <div className="text-gray">
                        Total Transactions
                    </div>
                    <BsArrowUpRight className="text-sm text-[#333] hidden group-hover:block" />
                </div>
                <div className="text-xl hover:text-dark-blue">170222</div>
            </div>
            <div className="border rounded-xl border-light-gray h-80 w-[24%] bg-white p-15 cursor-pointer">
                <div className="flex items-center justify-between group">
                    <div className="text-gray">
                        Last Safe Block
                    </div>
                    <BsArrowUpRight className="text-sm text-[#333] hidden group-hover:block" />
                </div>
                <div className="text-xl hover:text-dark-blue">170222</div>
            </div>
            <div className="border rounded-xl border-light-gray h-80 w-[24%] bg-white p-15 cursor-pointer">
                <div className="flex items-center justify-between group">
                    <div className="text-gray">
                        Last Safe Transactions
                    </div>
                    <BsArrowUpRight className="text-sm text-[#333] hidden group-hover:block" />
                </div>
                <div className="text-xl hover:text-dark-blue">170222</div>
            </div>
        </div>
        <div className="p-20 mt-20 bg-white border rounded-md shadow-md border-light-gray">
            <div className="flex justify-between h-40 text-sm font-bold border-b rounded-md border-light-gray">
                <div className="w-[5%]">Blocks</div>
                <div className="w-[8%]">Time</div>
                <div className="w-[3%]">Txn</div>
                <div className="w-[5%]">L1</div>
                <div className="w-[20%] text-center">Hash</div>
                <div className="w-[10%]">Coinbase Amount</div>
                <div className="w-[20%] text-center">Coinbase</div>
            </div>
            {renderBlocks()}
        </div>
    </div>
}