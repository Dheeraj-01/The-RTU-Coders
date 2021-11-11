import React, { useState, useEffect } from "react"
import { getRecentPosts } from "../services";
import Link from 'next/link'
import moment from "moment";

const RecentPost = () => {
  // console.log(recents);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((result) => setRecentPosts(result)).catch((err) => {
      console.log(err);
    })
  }, []);

  // console.log(recentPosts);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-5">
      <span className="font-bold line text-xl">Recent Post</span>
      <hr className="mt-2" />
      {recentPosts.map((post, index) => (
        <div className="flex items-center my-7" key = {index}>
          <img src={post.featuredImage.url}  alt={post.slug} className="rounded-full object-cover text-center w-10 h-9 mr-2" />
          <Link href={`/blog/${post.slug}`} key={post.slug} >
            <div className="cursor-pointer hover:text-blue-600">
              <div>
                {moment(post.createdAt).endOf('day').fromNow()}
              </div>
              <div>
                {post.title}
              </div>
            </div>
          </Link>

        </div>
      ))}


    </div>
  )
}

export default RecentPost;