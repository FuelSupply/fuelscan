import { Block } from "@/api/block";

export default function Blocks({ block }: { block: Block }) {
    return (
        <div className="flex flex-row">
            <div>
                {block.height}
            </div>
            <div>
                2
            </div>
        </div>
    )
}