import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState([]);
  const [isFetchingData, setFetchingData] = useState(false);

  const fetchBlogPost = async (blogId) => {
    if (slug) {
      setFetchingData(true);

      await fetch(`/api/getblog?slug=${blogId}`)
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          if (response?.success) {
            setBlog(response?.data);
          }
        })
        .finally(() => {
          setFetchingData(false);
        });
    }
  };

  useEffect(() => {
    fetchBlogPost(slug);
  }, [slug]);

  return (
    <div className={styles.blogpost}>
      {isFetchingData ? (
        <div className={styles.loader}>Fetching data ...</div>
      ) : (
        <>
          <h2>{blog?.title}</h2>
          <div />
          <p>{blog?.content}</p>
        </>
      )}
    </div>
  );
};

export default Slug;
