import React, { useState } from "react";
import styles from "@/styles/BlogPost.module.css";

const Slug = (props) => {
  const { blogObj = {} } = props;
  const [blog, setBlog] = useState(blogObj);

  return (
    <div className={styles.blogpost}>
      <h2>{blog && blog?.title}</h2>
      <div />
      <p>{blog && blog?.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  let blogObj;
  const { slug } = context.query;

  if (slug) {
    const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    const response = await data.json();

    if (response?.success && response?.data) {
      blogObj = response?.data;
    }
  }

  return {
    props: { blogObj },
  };
}

export default Slug;
