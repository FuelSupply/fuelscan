import { Transaction } from "@/api/transaction";


export default function TransactionComponent({ tx }: { tx: Transaction }) {
    return (
        <a href={"/transaction/" + tx.id}>
            <div className="flex flex-col mt-2">
                <div>
                    Hash {tx.id}
                </div>
                <div>
                    Sender {tx.sender}
                </div>
                <div>
                    Height {tx.height}
                </div>
                <div>
                    Gas: {tx.gas_price}/{tx.gas_limit}
                </div>
                <div>
                    timestamp: {tx.timestamp}
                </div>

                <div>
                    status: {tx.status}
                </div>
            </div>
        </a>
    )
}