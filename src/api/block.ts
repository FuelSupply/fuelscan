import axios from "@/lib/axios";

export interface Block {
    timestamp: number
    transactions_count: number
    transactions_root: string
    prev_root: string
    application_hash: string
    block_hash: string
    output_messages_root: string
    hash: string
    output_messages_count: number
    table_type: string
    height: number
    da_height: number
}


export async function fetch_block(): Promise<Block[]> {
    let resp: any = await axios.get("api/blocks");
    if (resp.status == 200) {
        return resp.data;
    }

    throw new Error("call api/transaction error");
}
