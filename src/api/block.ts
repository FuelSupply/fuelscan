import axios from "@/lib/axios";
import { Transaction } from "./transaction";

export interface Block {
    id: string
    height: number
    da_height: number
    application_hash: string
    output_messages_root_hash: string
    transactions_root: string
    prev_root: string
    timestamp: number
    transaction_count: number

    coinbase?: string
    coinbase_hash?: string
    coinbase_amount?: string

    transactions?: Transaction[]
}


export async function fetch_blocks(): Promise<Block[]> {
    let resp: any = await axios.get("api/block");
    if (resp.status == 200) {
        return resp.data;
    }

    throw new Error("call api/block error");
}

export async function details(hash: string): Promise<Block> {
    let resp: any = await axios.get("api/block/" + hash);
    if (resp.status == 200) {
        return resp.data;
    }

    throw new Error("call api/block/detail error");
}
