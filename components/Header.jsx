import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const links = [
    { name: "Contact Us", url: "contact" },
    { name: "About Us", url: "about" },
    { name: "Blogs", url: "blogs" },
    { name: "Home", url: "" },
]
const Header = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="container mx-auto px-4 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">The RTU Coders</span>
                    </Link>

                    
                    <button className=" float-right bg-white p-1 rounded-lg md:hidden lg:hidden" onClick={() => setActiveMenu(!activeMenu)}>
                        <Image
                            src="https://img.icons8.com/material-outlined/48/000000/menu--v1.png"
                            unoptimized
                            alt="icon"
                            height="35px"
                            width="35px"
                            className="block text-center align-middle" />
                    </button>
                    {activeMenu && (
                        <>
                            <div className=" md:hidden lg:hidden bg-gray-50 float-right rounded-lg m-4 p-6">
                                {links.reverse().map((category, index) => (
                                    <Link key={index} href={`/${category.url}`}>
                                        <div className="text-xl py-2 border-2 border-gray-600 rounded-lg mb-4 bg-yellow-100 text-center font-bold p-4">{category.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                {activeMenu && (
                    <>
                        <div className="hidden md:contents lg:contents">
                            {links.map((category, index) => (
                                <Link key={index} href={`/${category.url}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Header
