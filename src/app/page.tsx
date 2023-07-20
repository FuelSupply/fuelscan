'use client'

import { Block, fetch_block } from "@/api/block";
import { Transaction, fetch_transaction } from "@/api/transaction";
import Blocks from "@/components/blocks";
import TransactionComponent from "@/components/transaction";

import { useEffect, useState } from "react";

export default function Home() {
  let [blocks, setBlocks] = useState<Block[]>([]);
  let [txs, setTxs] = useState<Transaction[]>([]);

  useEffect(() => {
    console.log("Hello World");
    let request = async () => {
      let blocks = await fetch_block();
      setBlocks(blocks);
    }

    let fetch_txs = async () => {
      let txs = await fetch_transaction();
      setTxs(txs);
    }

    request()
    fetch_txs()
  }, []);


  return (
    <main className="flex item-center">
      <div className="flex">
        <div className="w-full m-2 mx-6 basis-1/2">
          <div className="border border-purple-300">
            {
              blocks.map((block) => (
                <Blocks block={block} key={block.hash} ></Blocks>
              ))
            }
          </div>
        </div>
        <div className="m-2 basis-1/4">
          {
            txs.map((tx) => (
              <TransactionComponent tx={tx} key={tx.hash}></TransactionComponent>
            ))
          }
        </div>
      </div>
    </main >
  )
}
