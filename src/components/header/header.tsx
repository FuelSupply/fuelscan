export default function Header() {
    return (
        <>
            <div className="flex h-10 bg-primary">
                <div className="flex basis-1/2">
                    <div className="m-1">Scan</div> <input type="text" className="m-1 border border-yellow-100 bg-primary border-secondary" />
                </div>
                <div className="items-endbasish-20">
                    ETH: $1889.00
                    Gas: 1 WEI
                </div>
            </div>
        </>
    )
}