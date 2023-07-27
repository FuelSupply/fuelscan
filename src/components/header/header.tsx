export default function Header() {
    return (
        <>
            <header className="border">
                <div className="container flex items-center justify-between px-4 mx-auto ">
                    <div className="flex">
                        <h1 className="text-3xl font-bold text-primary">FuelScan</h1>
                        <div className="container px-4 item-center">
                            <div className="rounded-lg">
                                <input
                                    type="text"
                                    className="h-6 px-2 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                    </div>


                    <div className="flex text-primary">
                        <div className="flex items-center">
                            <i className="mr-2 fas fa-coins"></i>
                            <span className="font-semibold">ETH Price:</span>
                            <span className="ml-1">3,200 USD</span>
                        </div>
                        <div className="flex items-center">
                            <i className="mr-2 fas fa-fire"></i>
                            <span className="font-semibold">Gas Price:</span>
                            <span className="ml-1">1 Gwei</span>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}