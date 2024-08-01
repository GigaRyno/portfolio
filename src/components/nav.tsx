"use client";
import Link from 'next/link'
import { colors, links } from "@/lib/data";
import { usePathname } from 'next/navigation';
import { getRandomItem } from '@/lib/utils';
import { useState } from 'react';

interface HoverState {
    index: number | null;
    color: string;
}

const Nav = () => {
    const [hoverState, setHoverState] = useState<HoverState>({ index: null, color: ''});
    const pathname = usePathname();
    return (
        <nav className='flex gap-8'>
            {links.map((link, index)=>{
                return ( 
                    <Link 
                        onMouseEnter={() => setHoverState({ index, color: getRandomItem(colors)})}
                        onMouseLeave={() => setHoverState({ index: null, color: '' })}
                        style={{ color: hoverState.index === index ? hoverState.color : '' }}
                        className={`${link.hash === pathname && "text-accent_blue border-b-2 border-accent_blue"} capitalize font-medium transition-all`}
                        href={link.hash} 
                        // onClick={}
                    >
                            {link.name}
                    </Link>)
            })}
        </nav>
    )
}

export default Nav