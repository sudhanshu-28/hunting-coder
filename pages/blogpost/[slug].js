import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();

  const [blog, setBlog] = useState();
  const [isFetchingData, setFetchingData] = useState(false);

  const fetchBlogPost = async (routerObj) => {
    const { slug } = routerObj.query;

    if (slug) {
      setFetchingData(true);

      await fetch(`/api/getblog?slug=${slug}`)
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
    if (!router.isReady) return;

    fetchBlogPost(router);
  }, [router.isReady]);

  return (
    <div className={styles.blogpost}>
      {isFetchingData ? (
        <div className={styles.loader}>Fetching data ...</div>
      ) : (
        <>
          <h2>{blog && blog?.title}</h2>
          <div />
          <p>{blog && blog?.content}</p>
        </>
      )}
    </div>
  );
};

export default Slug;
