"use client"
import { timeFormat } from "@/utils";
import React, { useCallback, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs"
import { AiOutlineCopy } from "react-icons/ai"
import { Block, Pagination } from "@/types";
import Link from "next/link";
import { Tooltip } from 'antd';
import { copyToClipboard, formatAddress } from "@/utils"
import { useRouter } from 'next/navigation'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

{/* <div className="w-[5%]">Blocks</div>
<div className="w-[8%]">Time</div>
<div className="w-[3%]">Txn</div>
<div className="w-[5%]">L1</div>
<div className="w-[20%] text-center">Hash</div>
<div className="w-[10%]">Coinbase Amount</div>
<div className="w-[20%] text-center">Coinbase</div> */}

const columns: ColumnsType<any> = [
    {
        title: 'Blocks',
        key: 'height',
        render: (v) => <Link className="text-dark-blue" href={`/block/${v.id}`}>{v.height}</Link>
    },
    {
        title: 'Time',
        key: 'timestamp',
        render: (v) => timeFormat(v.timestamp)
    },
    {
        title: 'Txn',
        key: 'id',
        render: (v) => <Link className="text-dark-blue" href={`/block/${v.id}`}>
            {v.transaction_count}
        </Link>
    },
    {
        title: 'L1',
        dataIndex: 'da_height',
        key: 'da_height',
    },
    {
        title: 'Hash',
        render: (v) => <Tooltip title={v.id} className="flex items-center">
            <span className="mr-20" > {formatAddress(v.id)}</span>
            <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.id)} />
        </Tooltip>
    },
    {
        title: 'Amount',
        dataIndex: 'coinbase_amount',
        align: "center"
    },
    {
        title: 'Coinbase',
        render: (v) => <Tooltip title={v.coinbase} className="flex items-center">
            <span className="mr-20" > {formatAddress(v.coinbase)}</span>
            <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.coinbase)} />
        </Tooltip>
    },
];

interface IBlocks {
    data: Block[],
    total: number

}

export default function Block({ blocks, searchParams }: { blocks: IBlocks, searchParams: Pagination }) {
    const router = useRouter()
    useEffect(() => {
        console.log("blocks----", blocks);
    })

    const handlePageChange = (val: any) => {
        console.log(val);
        router.push(`/blocks?current=${val.current}&pageSize=${val.pageSize}`)
    }

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
        <Table className="p-20 mt-20 bg-white border rounded-md shadow-md border-light-gray" columns={columns} dataSource={blocks.data}
            pagination={{ total: blocks.total, pageSize: Number(searchParams.pageSize), current: Number(searchParams.current) }}
            onChange={handlePageChange}
        />
    </div>
}