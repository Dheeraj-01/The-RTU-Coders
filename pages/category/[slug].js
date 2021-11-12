import React from 'react'
import { PostCard, RecentPost, Categories } from '../../components';
import { getPostsByCategory, getTags } from '../../services';

const Category = ({ posts }) => {
    // console.log(posts);
    return (
        <>
            <div className="block text-center m-8">
                <span className="font-bold text-5xl text-white">Blogs By Categories</span>
            </div>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 col-span-1">
                        {posts.map((post, index) => (
                            <PostCard post={post} key={index} />
                        ))}
                    </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className="lg:sticky relative top-8">
                            <RecentPost />
                            <Categories />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Category;



export async function getStaticProps({ params }) {
    // console.log(params);
    const data = (await getPostsByCategory(params.slug)) || [];
    return { props: { posts: data[0].post } };
}


export async function getStaticPaths() {
    const tags = await getTags();
    // console.log(posts);
    return {
        paths: tags.map(({ slug }) => ({ params: { slug } })),
        fallback: false,
    }
}

