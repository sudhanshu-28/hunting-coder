import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    const response = await fetch("/api/blogs");

    if (response.ok && response.status === 200) {
      const res = await response.json();
      if (res?.success) {
        setBlogs(res?.data);
      }
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogs}>
        <h2>Latest Blogs:</h2>
        {blogs.map((blog) => {
          return (
            <div className={styles.blogItems}>
              <Link href={`blogpost/${blog?.path}`}>
                <h3>{blog?.title}</h3>
              </Link>
              <p>{blog?.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
