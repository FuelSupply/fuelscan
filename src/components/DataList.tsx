"use client"
import React, { useCallback, useEffect, useMemo } from "react";
import { GiStoneBlock } from "react-icons/gi"
import { HiViewList } from "react-icons/hi"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Block, BlockType, Transaction } from "@/types"
import Link from "next/link";
import { timeFormat } from "@/utils"

export default function DataList({ txs, blocks, type }: { txs?: Transaction[], blocks?: Block[], type: BlockType }) {

    useEffect(() => {
        console.log("blocks:---------", blocks);
        console.log("txs:---------", txs);
    })


    const renderBlocks = useCallback(() => {
        if (!blocks) return
        return <>
            {
                blocks.map(v => (
                    <div key={v.id} className="flex items-center justify-between p-10 pt-20 pb-20 ml-20 mr-20 border-b border-light-gray">
                        <div className="flex items-center">
                            <GiStoneBlock className="text-3xl" />
                            <div className="ml-10">
                                <p className="text-lg cursor-pointer text-dark-blue">{v.height}</p>
                                <p className="text-sm text-gray">{timeFormat(v.timestamp)} </p>
                            </div>
                        </div>
                        <div className="w-1/3 text-center">
                            <p className="flex">
                                <span className="mr-5">block Hash</span>
                                <Link href={`/block/${v.id}`} className="flex-1 block truncate cursor-pointer text-dark-blue">
                                    <span>{v.id}</span>
                                </Link>
                            </p>
                            <p className="text-sm text-left text-gray">
                                <span className="cursor-pointer text-dark-blue">{v.count} txns</span>
                                {/* in 12 secs */}
                            </p>
                        </div>
                        <div className="p-5 text-xs font-bold rounded-lg cursor-pointer ">
                            L1 : {v.da_height}
                        </div>
                    </div>
                ))
            }
            <Link className="flex items-center justify-center w-full text-center cursor-pointer h-50 bg-off-white text-dark-gray hover:text-dark-blue" href={"/blocks"}>
                <span className="text-sm">Views All Blocks</span>
                <AiOutlineArrowRight className="ml-5" />
            </Link>
        </>
    }, [blocks])

    const renderTsx = useCallback(() => {
        if (!txs) return
        return <>
            {
                txs.map(v => (
                    <div key={v.id} className="flex items-center justify-between p-10 pt-20 pb-20 ml-20 mr-20 border-b border-light-gray">
                        <div className="flex items-center">
                            <HiViewList className="text-3xl" />
                            <div className="ml-10">
                                <p className="text-lg cursor-pointer text-dark-blue">{v.height}</p>
                                <p className="text-sm text-gray">{timeFormat(v.timestamp)} </p>
                            </div>
                        </div>
                        <div className="w-1/3 text-center">
                            <p className="flex">
                                <span className="mr-5">Hash</span>
                                <Link href={`/tx/${v.id}`} className="flex-1 block truncate cursor-pointer text-dark-blue">
                                    <span>{v.id}</span>
                                </Link>
                            </p>
                            <p className="flex">
                                <span className="mr-5">Sender</span>
                                <span className="flex-1 block truncate cursor-pointer text-dark-blue">{v.sender}</span>
                            </p>
                        </div>
                        <div className="p-5 text-xs font-bold border rounded-lg cursor-pointer border-light-gray">
                            {v.status}
                        </div>
                    </div>
                ))
            }
            <Link className="flex items-center justify-center w-full text-center cursor-pointer h-50 bg-off-white text-dark-gray hover:text-dark-blue" href={"/"}>
                <span className="text-sm">Views All Transactions</span>
                <AiOutlineArrowRight className="ml-5" />
            </Link>
        </>
    }, [txs])






    const renderList = useCallback(() => {
        if (type === BlockType.Block) return renderBlocks()
        if (type === BlockType.Transaction) return renderTsx()
    }, [renderBlocks, renderTsx, type])

    const title = useMemo(() => {
        return type == BlockType.Block ? "Latest Blocks" : "Latest Transactions"
    }, [type])


    return <div className="w-[49%] rounded-lg border border-light-gray">
        <div className="p-20 border-b border-light-gray">
            <span className="font-semibold">{title}</span>
        </div>
        {renderList()}
    </div>
}