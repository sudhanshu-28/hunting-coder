import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isFetchingData, setFetchingData] = useState(false);

  const fetchAllBlogs = async () => {
    setFetchingData(true);

    await fetch("/api/blogs")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        if (response?.success) {
          setBlogs(response?.data);
        }
      })
      .finally(() => {
        setFetchingData(false);
      });
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogs}>
        <h2>Latest Blogs:</h2>
        {isFetchingData ? (
          <div className={styles.loader}>Fetching data ...</div>
        ) : (
          <>
            {blogs.map((blog) => {
              return (
                <div className={styles.blogItems}>
                  <Link href={`blogpost/${blog?.slug}`}>
                    <h3>{blog?.title}</h3>
                  </Link>
                  <p>{blog?.content.substr(0, 200)} {`...`}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
