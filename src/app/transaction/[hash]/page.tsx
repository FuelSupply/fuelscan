'use client'

import { Transaction, fetch_transaction } from "@/api/transaction";
import { useEffect, useState } from "react";


export default function transaction({ params }: { params: { hash: string } }) {
    let [tx, setTx] = useState<Transaction>();

    useEffect(() => {
        let request = async () => {
            let tx = await fetch_transaction(params.hash);
            console.log(tx);
            setTx(tx);
        }

        request()
    }, []);

    return (<div className="bg-black conraner">
        {params.hash}
    </div>)
}