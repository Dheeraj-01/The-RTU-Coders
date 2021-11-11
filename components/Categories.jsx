import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { getRecentCategories } from '../services';


const categories = () => {
    const [recentCategories, setRecentCategories] = useState([]);

    useEffect(() => {
        getRecentCategories().then((result) => setRecentCategories(result)).catch((err) => {
            console.log(err);
        })
    }, []);
    // console.log(recentCategories);
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 mb-5">
            <span className="font-bold line text-xl">Recent Categories</span>
            <hr className="mt-2 mb-3" />
            {recentCategories.map((tag, index) => (
                <Link href={`/category/${tag.slug}`} key={tag.slug}>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3 cursor-pointer hover:text-red-400 transition delay-100">#{tag.name}</span>
                </Link>
            ))}


        </div>
    )
}

export default categories
