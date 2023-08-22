import React from "react";
import {
    FiSearch
} from 'react-icons/fi';
import { queryOverview } from "@/api/index"

export default async function Home() {
    const result = await queryOverview();


    return <section className="w-full h-280 bg-gray-dark">
        <div className="container relative h-full mx-auto pt-80">
            <p className="text-xl text-white">The Fuel Explorer</p>
            <div className="flex items-center w-2/4 p-4 mt-10 bg-white rounded-md h-50">
                <input type="text" className="flex-1 h-full pl-20 pr-10 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-light-gray focus:border-light-gray" placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" />
                <FiSearch className="text-2xl cursor-pointer w-50"></FiSearch>
            </div>
            <div className="absolute flex items-center justify-between w-full p-40 translate-y-1/2 bg-white border rounded-md h-100 border-light-gray">
                <div>
                    <h2 className="text-2xl">Network Stats</h2>
                    <p className="text-sm text-gray">Network Stats BlockChain Mainnet is open to everyone.</p>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl text-gray">Blocks</h2>
                        <h4 className="text-xl">{result.block_count}</h4>
                    </div>
                    <div className="w-1 ml-20 mr-20 h-30 bg-light-gray"></div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl text-gray">Transactions</h2>
                        <h4 className="text-xl">{result.transaction_count}</h4>
                    </div>
                    <div className="w-1 ml-20 mr-20 h-30 bg-light-gray"></div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl text-gray">Addresses</h2>
                        <h4 className="text-xl">{result.address_count}</h4>
                    </div>
                    <div className="w-1 ml-20 mr-20 h-30 bg-light-gray"></div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl text-gray">TPS</h2>
                        <h4 className="text-xl">{result.tps}</h4>
                    </div>
                    <div className="w-1 ml-20 mr-20 h-30 bg-light-gray"></div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl text-gray">Contract Count</h2>
                        <h4 className="text-xl">{result.contract_count}</h4>
                    </div>

                </div>
            </div>
        </div>
    </section>
}