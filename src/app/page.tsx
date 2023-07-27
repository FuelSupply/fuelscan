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
    <main className="container px-4 mx-auto mt-6">
      {/* <div className="">
        <div className="flex mb-4 row">
          <div className="col-md-3">
            <img src="hero1.jpg" alt="Hero 1" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 1</h3>
          </div>
          <div className="col-md-3">
            <img src="hero2.jpg" alt="Hero 2" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 2</h3>
          </div>
          <div className="col-md-3">
            <img src="hero3.jpg" alt="Hero 3" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 3</h3>
          </div>
          <div className="col-md-3">
            <img src="hero4.jpg" alt="Hero 4" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 4</h3>
          </div>
        </div>

        <div className="flex row">
          <div className="col-md-3">
            <img src="hero5.jpg" alt="Hero 5" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 5</h3>
          </div>
          <div className="col-md-3">
            <img src="hero6.jpg" alt="Hero 6" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 6</h3>
          </div>
          <div className="col-md-3">
            <img src="hero7.jpg" alt="Hero 7" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 7</h3>
          </div>
          <div className="col-md-3">
            <img src="hero8.jpg" alt="Hero 8" className="rounded img-fluid" />
            <h3 className="mt-2 text-center">Hero 8</h3>
          </div>
        </div>
      </div> */}


      <div className="p-6 mt-2 bg-white rounded-lg shadow-lg">
        <p className="text-lg text-gray-800">Welcome to Fuel Block Explorer!</p>
        <p className="mt-4 text-gray-600">Explore the Fuel blockchain and search for transactions, addresses, and blocks.</p>
        <a href="#" className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Get Started</a>
      </div>

      <div className="p-6 mt-6 rounded-lg shadow-lg bg-blue-50">
        <p className="text-red">We are looking for designers, front-end developers to join our team to participate in the <a className="text-red-700" href="https://dorahacks.io/hackathon/sway-summer-hackathon/buidl">hackathon</a></p>
      </div>

      <div className="flex w-full mt-6 row">
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
