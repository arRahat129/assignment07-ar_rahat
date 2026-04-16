"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { GoGraph } from 'react-icons/go';
import { LuClock3 } from 'react-icons/lu';
import { RiHome2Line } from 'react-icons/ri';

const CurrentLink = ({ items, href, children }) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`pb-2 font-semibold ${pathname === href ? "border-b-1 border-green-700" : ""}`}
        >
            <button className={`btn ${pathname === href
                ? "text-white bg-green-950 rounded-md"
                : "text-gray-700 border-none bg-white"
            } hover:transform hover:scale-105`}>
                {
                    items.text === 'Home'
                        ? <RiHome2Line />
                        : items.text === 'Timeline'
                            ? <LuClock3 />
                            : <GoGraph />
                }
                {children}
            </button>
        </Link>
    );
};

export default CurrentLink;