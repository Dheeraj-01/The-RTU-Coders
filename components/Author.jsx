import React from 'react'
import Image from 'next/image';
const Author = ({ author }) => {
    // console.log(author);
    return (
        <div className="container mx-auto rounded-lg relative bg-white p-8 mb-5 text-center lg:flex flex-wrap">
            <Image
                src={author.photo.url}
                unoptimized
                alt={author.name}
                height="150px"
                width="150px"
                className="block text-center rounded-full m-4 align-middle" />
            <div className="text-center m-4">
                <h1 className="font-bold text-xl text-gray-800 cursor-pointer hover:text-green-400 transition delay-75">{author.name}</h1>
                <p>
                    {`{${author.bio}}`}
                </p>
            </div>
        </div>
    )
}

export default Author
