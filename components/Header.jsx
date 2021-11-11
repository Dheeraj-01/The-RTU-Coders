import React from 'react'
import Link from 'next/link'

const links = [
    {name: "Contact Us", url: "contact"},
    {name: "About Us", url: "about"},
    {name: "Blogs", url: "blogs"},
    {name: "Home", url: ""},
]
const Header = () => {

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">The RTU Coders</span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {links.map((category, index) => (
                        <Link key={index} href={`/${category.url}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
