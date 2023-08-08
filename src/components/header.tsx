import Logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex mx-auto mb-5 border border-b-2 bg-theme-nav-background shadow-theme min-h-50px sm:mb-10">
            <div className='flex flex-col max-w-2xl mx-auto'>
                <div className='flex'>
                    <div className="flex items-center justify-between rounded cursor-default md:bg-theme-secondary-200 md:dark:bg-theme-secondary-800 md:border border-theme-secondary-300 dark:border-transparent md:text-theme-secondary-700 md:dark:text-theme-secondary-200">
                        <div className="font-semibold md:py-1.5 md:pr-2 md:pl-3 md:text-sm transition-default">
                            <span>Price:</span>
                            <div className="inline-flex items-center">
                                $0.28
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    123
                </div>
            </div>
        </header >
    )
}