'use client'

import { Block, details } from "@/api/block";
import { useEffect, useState } from "react";


export default function Block({ params }: { params: { hash: string } }) {
    let [block, setBlock] = useState<Block>();
    let request = async () => {
        let block = await details(params.hash);
        console.log(block);
        setBlock(block);
    }

    useEffect(() => {
        request()
    }, []);


    return (
        <div className="bg-black conraner">
            Block
            Hash
            {block?.id}
            Height	{block?.height}
            Chain Index	2 → 1
            Nb. of transactions	{block?.transactions?.length}
            Timestamp
            {block?.timestamp}
            Transactions
            Hash	Inputs		Outputs	Total Amount

            0 addresses		1 address
            {block?.transactions?.map((tx, index) => {
                return <div key={index}>
                    {tx.id}
                </div>
            })}
        </div>
    )
}