import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './nav'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-gray-950 dark:text-gray-50'>
            <div className='container mx-auto flex justify-between'>
                {/* LOGO */}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        <span>Ryan</span><span className='bg-clip-text text-transparent bg-gradient-to-r from-accent_purple to-accent_pink'>.</span>
                    </h1>
                </Link>
                {/* Desktop Nav */}
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav />
                    <Link href="/contact">
                        {/* <Button>Resume</Button> */}
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className='xl:hidden'>Mobile nav</div>
            </div>
        </header>
    )
}

export default Header