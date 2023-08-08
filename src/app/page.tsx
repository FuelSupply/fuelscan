'use client'

import { Block, fetch_blocks } from "@/api/block";
import { Transaction, fetch_transactions } from "@/api/transaction";
import Blocks from "@/components/blocks";
import TransactionComponent from "@/components/transaction";

import { useEffect, useState } from "react";

export default function Home() {
  let [blocks, setBlocks] = useState<Block[]>([]);
  let [txs, setTxs] = useState<Transaction[]>([]);

  useEffect(() => {
    let request = async () => {
      let blocks = await fetch_blocks();
      setBlocks(blocks);
    }

    let fetch_txs = async () => {
      let txs = await fetch_transactions();
      setTxs(txs);
    }

    request()
    fetch_txs()
  }, []);


  return (
    <main className="">
      <div className="flex flex-col items-center justify-center w-full py-2">
        <div className="flex flex-col w-1/2">
          <div className="items-start min-h-20px">
            Txs:{txs.length}
          </div>
          <div className="min-h-20px">
            Blocks:{blocks.length}
          </div>
          <div className="min-h-20px">
            Gas Price: 1 GWEI
          </div>
          <div className="min-h-20px">
            TPS: 20/sec
          </div>
          <div className="min-h-20px">
            Addresses: 40000000
          </div>
        </div>
        <div className="w-1/2">

        </div>
      </div>
      <div className="flex w-full mt-6 border row">
        <div className="w-1/2 col-md-6">
          <h2 className="mb-3">Blocks</h2>
          <ul className="list-group">
            {blocks.map((block, index) => {
              return <Blocks key={index} block={block} />
            })}
          </ul>
        </div>

        <div className="w-1/2 col-md-6">
          <h2 className="mb-3">Transactions</h2>
          <ul className="list-group">
            {txs.map((tx, index) => {
              return <TransactionComponent key={index} tx={tx} />
            })}
          </ul>
        </div>
      </div>


    </main >
  )
}
