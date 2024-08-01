import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './nav'

const Header = () => {
    return (
        <header className='sticky top-0 z-10 py-8 xl:py-10 text-gray-950 dark:text-gray-50 bg-gray-50 dark:bg-gray-900'>
            <div className='container mx-auto flex justify-between'>
                {/* LOGO */}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        <span>Ryan</span><span className='bg-clip-text text-transparent bg-accent_light_blue'>.</span>
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