"use client"
import { timeFormat } from "@/utils";
import React, { useCallback, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs"
import { AiOutlineCopy } from "react-icons/ai"
import { Block, Pagination, Transaction } from "@/types";
import Link from "next/link";
import { Tooltip } from 'antd';
import { copyToClipboard, formatAddress } from "@/utils"
import { useRouter } from 'next/navigation'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';


const columns: ColumnsType<any> = [
    {
        title: 'Transaction Hash',
        render: (v) => <Tooltip title={v.id} className="flex items-center">
            <Link className="text-dark-blue mr-2" href={`/tx/${v.id}`}>{formatAddress(v.id)}</Link>
            <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.id)} />
        </Tooltip>
    },
    {
        title: 'Time',
        key: 'timestamp',
        align: "center",
        render: (v) => timeFormat(v.timestamp)
    },
    {
        title: 'Sender',
        align: "center",
        render: (v) => <Tooltip title={v.sender} className="flex items-center">
            <div className=" mr-2">{formatAddress(v.sender)}</div>
            <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.sender)} />
        </Tooltip>,

    },
    {
        title: 'Block Height',
        dataIndex: 'height',
        align: "center",
    },
    {
        title: 'L1',
        dataIndex: 'da_height',
        align: "center"
    },
    {
        title: 'Status',
        dataIndex: 'status',
        align: "center"
    },
    {
        title: 'tx_type',
        dataIndex: 'tx_type',
        align: "center"
    },
    {
        title: 'Gas Limit ',
        dataIndex: 'gas_limit',
        align: "center"
    },
    {
        title: 'Gas Price ',
        dataIndex: 'gas_price',
        align: "center"
    },
    {
        title: 'Gas Used',
        dataIndex: 'gas_used',
        align: "center"
    },
];

interface ITxs {
    data: Transaction[],
    total: number

}

export default function Block({ txs, searchParams }: { blocks: ITxs, searchParams: Pagination }) {
    const router = useRouter()
    useEffect(() => {
        console.log("txs----", txs);
    })

    const handlePageChange = (val: any) => {
        router.push(`/txs?current=${val.current}&pageSize=${val.pageSize}`)
    }

    return <div className="container mx-auto mt-20">
        <div>
            <span className="mr-10 text-2xl">
                Transactions
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
        <Table className="p-20 mt-20 bg-white border rounded-md shadow-md border-light-gray" columns={columns} dataSource={txs.data}
            pagination={{ total: txs.total, pageSize: Number(searchParams.pageSize), current: Number(searchParams.current) }}
            onChange={handlePageChange}
        />
    </div>
}