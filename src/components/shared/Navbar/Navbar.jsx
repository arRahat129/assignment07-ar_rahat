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
            <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-3 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <div className="flex justify-center md:justify-start">
                    <Link href={"/"}>
                        <Image
                            src={NavImage}
                            alt="NavImage"
                            className="h-10 w-auto sm:h-12"
                        />
                    </Link>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 sm:gap-3">
                        {navItems.map((items, i) => (
                            <CurrentLink
                                key={i}
                                items={items}
                                href={items.path}
                            >
                                {items.text}
                            </CurrentLink>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;