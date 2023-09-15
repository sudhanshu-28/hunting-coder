import React, { useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  const { allBlogs } = props;

  const [blogs, setBlogs] = useState(allBlogs);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogs}>
        <h2>Latest Blogs:</h2>
        {blogs.map((blog) => {
          return (
            <div className={styles.blogItems}>
              <Link href={`blogpost/${blog?.slug}`}>
                <h3>{blog?.title}</h3>
              </Link>
              <p>
                {blog?.content?.substr(0, 200)} {`...`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let allBlogs = [];

  const data = await fetch(`http://localhost:3000/api/blogs`);
  const response = await data.json();

  if (response?.success && response?.data.length !== 0) {
    allBlogs = response?.data;
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;
