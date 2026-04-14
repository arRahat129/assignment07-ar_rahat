import Image from 'next/image';
import NavImage from '@/assets/logo.png'
import Link from 'next/link';
import React from 'react';
import CurrentLink from './CurrentLink';

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/timeline",
            text: "TimeLine",
        },
        {
            path: "/stats",
            text: "Stats",
        },
    ]

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto py-4">
                <div className="navbar-start">
                    <Link href={"/"}>
                        <Image
                            src={NavImage}
                            alt="NavImage"
                        / >
                    </Link>
                </div>
                
                <div className="navbar-end">
                    <div>
                        {
                            navItems.map((items, i) => (
                                <CurrentLink key={i} items={items} href={items.path}>
                                    {items.text}
                                </CurrentLink>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;