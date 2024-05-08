import { blogPosts } from "@/data/blog/blogData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const LatestBlogPosts = ({ twoColunmHeader }: { twoColunmHeader: boolean }) => {

  
  // get latest blogs data from server here

  return (
    <div className="py-16 bg-gray-300 dark:bg-gray-950">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {twoColunmHeader ? (
          <div className="flex flex-wrap items-center justify-between mb-12">
            <h2 className="text-2xl md:text-5xl font-bold  text-gray-900 dark:text-white border-l-4 p-2 border-l-rose-500 ">
              Latest Blog Posts
            </h2>
             <Button 
             variant={'outline'}
             size={'sm'}
             >
             <Link href={"/blog"}>
                Read More
              </Link>
             </Button>
          </div>
        ) : (
          <h2 className="text-2xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 border-b-4 border-b-rose-500 rounded-b-xl w-fit mx-auto p-2">
            Latest Blog Posts
          </h2>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative w-full h-[15rem] mt-2">
                <Image
                  src={post.image as string}
                  fill
                  alt={post.title}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  By {post.author} | {post?.date?.toISOString()}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={`/blog/${post.title}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPosts;
