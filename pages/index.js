import Head from 'next/head';


import {PostCard, RecentPost, Categories} from '../components';
import { getHomePosts } from '../services';


export default function Home({posts}) {

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The RTU Coders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post = {post.node} key={index}/>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <RecentPost/>
            <Categories/>
          </div>
        </div>
      </div>

    </div>
  )
}


export async function getStaticProps(){
  const posts = (await getHomePosts()) || [];
  return {props: {posts}};
}
