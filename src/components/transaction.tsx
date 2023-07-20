import { Transaction } from "@/api/transaction";


export default function TransactionComponent({ tx }: { tx: Transaction }) {
    return (
        <div className="flex flex-row">
            <div>
                {tx.height}
            </div>
            <div>
                2
            </div>
        </div>
    )
}