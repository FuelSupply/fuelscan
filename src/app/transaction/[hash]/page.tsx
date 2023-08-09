'use client'

import { Transaction, fetch_transaction } from "@/api/transaction";
import { useEffect, useState } from "react";


export default function Transaction({ params }: { params: { hash: string } }) {
    let [tx, setTx] = useState<Transaction>();
    let request = async () => {
        let tx = await fetch_transaction(params.hash);
        setTx(tx);
    }

    useEffect(() => {
        request()
    }, []);

    return (<div className="bg-black conraner">
        {params.hash}
    </div>)
}