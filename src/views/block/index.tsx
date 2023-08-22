"use client"
import { BlockDetail } from "@/types";
import { copyToClipboard, formatAddress, timeFormat } from "@/utils";
import React, { useEffect } from "react";
import type { CollapseProps } from 'antd';
import { Collapse, Tooltip } from 'antd';
import { AiOutlineCopy } from "react-icons/ai";
import Link from "next/link";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const items: CollapseProps['items'] = [
//     {
//         key: '1',
//         label: 'This is panel header 1',
//         children: <p>{text}</p>,
//     },
// ];

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
                    Transactions List :
                </div>
                <Collapse defaultActiveKey={['1']} >
                    <Collapse.Panel header="Transactions List" key="1">
                        {
                            blockDetail.transactions.map(v => (
                                <div key={v.id} className="pb-10 border-b border-gray-dark">
                                    <Tooltip title={v.id} className="flex items-center">
                                        <Link className="text-dark-blue mr-2" href={`/tx/${v.id}`}>{v.id}</Link>
                                        <AiOutlineCopy className="cursor-pointer" onClick={() => copyToClipboard(v.id)} />
                                    </Tooltip>
                                </div>
                            ))
                        }
                    </Collapse.Panel>
                </Collapse>
            </div>
        </div>
    </div>
}