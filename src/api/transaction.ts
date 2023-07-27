import axios from "@/lib/axios";

export interface Transaction {
    gas_limit: number
    status: Status
    gas_price: number
    block_hash: string
    sender: string
    hash: string
    table_type: string
    output: Output[]
    height: number
    da_height: number
    input: Input[]
    transaction_type: string
}

export interface Status {
    Failure?: Failure
    Success?: Success
}

export interface Failure {
    block_id: string
    time: number[]
    reason: string
    program_state: ProgramState
}

export interface ProgramState {
    Revert: number
}

export interface Success {
    block_id: string
    time: number[]
    program_state: ProgramState2
}

export interface ProgramState2 {
    ReturnData: string
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


export async function fetch_transaction(): Promise<any> {
    let resp: any = await axios.get("api/transactions");
    if (resp.status == 200) {
        return resp.data;
    }

    throw new Error("call api/transaction error");
}
