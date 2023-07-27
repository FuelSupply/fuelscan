import { Block } from "@/api/block";

export default function Blocks({ block }: { block: Block }) {
    return (
        <a href={"/block/" + block.hash}>
            <div className="flex flex-row mt-2">
                <div >{block.block_hash}</div>
                - <li className="list-group-item">{block.height}</li>
                - <div>{block.timestamp}</div>
            </div>
        </a>
    )
}