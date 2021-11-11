import moment from 'moment';
import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link'


const BlogDetail = ({ post }) => {
    // console.log(post);
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-8 w-full">
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
                    <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                    {ReactHtmlParser(post.content.html)}

                </div>
                <div className="px-6 pt-4">
                    {post.tags.map((tag) => (
                        <Link href={`/category/${tag.slug}`} key={tag.slug}>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-red-400 transition delay-100">#{tag.name}</span>
                        </Link>

                    ))}

                </div>
            </div>

        </>
    )
}

export default BlogDetail
