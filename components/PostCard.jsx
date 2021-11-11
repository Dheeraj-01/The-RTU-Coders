import React from 'react'
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({ post }) => {

    // console.log(post);
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={post.featuredImage.url} alt={post.title}
                    className="object-top absolute h-80 w-full object-cover shadow-lg rounded-lg rounded-t-lg lg:rounded-lg"
                />
            </div>

            <Link href={`/blog/${post.slug}`}>
                <h1 className="text-center text-3xl font-bold text-gray-800 transition duration-200 cursor-pointer hover:text-red-600">
                    {post.title}
                </h1>
            </Link>
            <div className="block lg:flex text-center justify-center">
                <div className="flex justify-center ">
                    <img src={post.coder.photo.url} alt={post.coder.name}
                        className="rounded-full h-12 w-12 self-center"
                    />
                    <p className="m-3 text-gray-800 align align-middle">{post.coder.name}</p>
                </div>
                <div className="flex justify-center ">
                    <img src="https://img.icons8.com/doodle/48/000000/calendar--v2.png" />

                    <span className="m-3 text-gray-800 align align-middle">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
            <p className="text-center m-5 text-gray-600">
                {post.displayContent}
            </p>
            <div className="text-center">
                <Link href={`/blog/${post.slug}`}>
                    <span className="transition duration-100 font-normal bg-green-200 rounded-full p-2 cursor-pointer hover:bg-red-400">
                        Read More
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
