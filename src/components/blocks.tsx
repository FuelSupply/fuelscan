import { Block } from "@/api/block";

export default function Blocks({ block }: { block: Block }) {
    return (
        <a href={"/block/" + block.id}>
            <div className="flex flex-col mt-2">
                <div>Block: {block.id}</div>
                <div>Height: {block.height}</div>
                <div>BlockTime:{block.timestamp}</div>
                <div>L1: {block.da_height}</div>
                <div>Tx: {block.transaction_count}</div>
            </div>
        </a>
    )
}