import Link from 'next/link'

import NavLinks from './nav-links'
import Navlogs from './nav-logs'

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto flex justify-between w-full h-16 items-center">
                <div className='flex items-center space-x-2'>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-xl font-bold">FoodHub</span>
                    </Link>
                    <NavLinks />
                </div>
                <div className="flex items-center space-x-4 lg:space-x-4">
                    <Navlogs />
                </div>
            </div>
        </header>
    )
}

