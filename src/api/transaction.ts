import axios from "@/lib/axios";

export interface Transaction {
    id: string
    height: number
    block_hash: string
    tx_type: string
    da_height: number
    gas_limit: string
    gas_price: string
    timestamp: number
    sender: string
    status: string
    reason: string
    input: Input[]
    output: Output[]
}


export interface Output {
    Contract?: Contract
    Change?: Change
    Variable?: Variable
}

export interface Contract {
    input_index: number
    balance_root: string
    state_root: string
}

export interface Change {
    to: string
    amount: number
    asset_id: string
}

export interface Variable {
    to: string
    amount: number
    asset_id: string
}

export interface Input {
    Contract?: Contract2
    CoinSigned?: CoinSigned
}

export interface Contract2 {
    utxo_id: UtxoId
    balance_root: string
    state_root: string
    tx_pointer: TxPointer
    contract_id: string
}

export interface UtxoId {
    tx_id: string
    output_index: number
}

export interface TxPointer {
    block_height: number
    tx_index: number
}

export interface CoinSigned {
    utxo_id: UtxoId2
    owner: string
    amount: number
    asset_id: string
    tx_pointer: TxPointer2
    witness_index: number
    maturity: number
}

export interface UtxoId2 {
    tx_id: string
    output_index: number
}

export interface TxPointer2 {
    block_height: number
    tx_index: number
}


export async function fetch_transactions(): Promise<Transaction[]> {
    let resp: any = await axios.get("api/transaction");
    if (resp.status == 200) {
        return resp.data;
    }

    throw new Error("call api/transaction error");
}

export async function fetch_transaction(hash: string): Promise<Transaction> {
    let resp: any = await axios.get("api/transaction/" + hash);
    if (resp.status == 200) {
        return resp.data;
    }

    throw new Error("call api/transaction error");
}
