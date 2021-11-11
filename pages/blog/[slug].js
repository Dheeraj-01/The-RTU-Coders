import React from 'react'
import { RecentPost, Categories, BlogDetail, Author, CommentForm, Comments } from '../../components'
import { getBlogDetails, getPosts } from '../../services';

const BlogDetails = ({ post }) => {
    // console.log(post);
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    <BlogDetail post = {post}/>
                    <Author author = {post.coder}/>
                    <CommentForm slug = {post.slug}/>
                    <Comments slug = {post.slug}/>
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <RecentPost />
                        <Categories />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogDetails;



export async function getStaticProps({ params }) {
    // console.log(params);
    const data = (await getBlogDetails(params.slug)) || [];
    return { props: { post: data } };
}


export async function getStaticPaths() {
    const posts = await getPosts();
    // console.log(posts);
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false,
    }
}
