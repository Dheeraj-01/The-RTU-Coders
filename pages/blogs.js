import React from 'react'
import { PostCard, RecentPost, Categories } from '../components';
import { getPosts } from '../services';

const Blogs = ({ posts }) => {
    // console.log(posts);
    return (
        <>
            <div className="block text-center m-8">
                <span className="font-bold text-5xl text-white">Top Blogs</span>
            </div>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 col-span-1">
                        {posts.map((post, index) => (
                            <PostCard post={post.node} key={index} />
                        ))}
                    </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className="lg:sticky relative top-8">
                            <RecentPost />
                            <Categories />
                        </div>
                    </div>
                </div>

            </div></>
    )
}

export default Blogs;


export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return { props: { posts } };
}

