import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogs}>
        <h2>Latest Blogs:</h2>
        <div className={styles.blogItems}>
          <Link href={`/blogpost/learn-javascript`}>
            <h3>How to learn Javascript in 2022?</h3>
          </Link>
          <p>{`JavaScript is a versatile and widely used programming language primarily known for its role in web development.`}</p>
        </div>

        <div className={styles.blogItems}>
          <h3>How to learn Javascript in 2022?</h3>
          <p>{`JavaScript is a versatile and widely used programming language primarily known for its role in web development.`}</p>
        </div>

        <div className={styles.blogItems}>
          <h3>How to learn Javascript in 2022?</h3>
          <p>{`JavaScript is a versatile and widely used programming language primarily known for its role in web development.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
