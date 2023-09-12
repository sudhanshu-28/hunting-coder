import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.blogpost}>
      <h2>Title of Page: {slug}</h2>
      <div />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est
        quo voluptate sed, omnis dolor porro exercitationem nam fuga iste.
        Inventore rerum ea temporibus omnis sit facilis, dicta totam quidem quo
        culpa itaque. Expedita totam nesciunt necessitatibus fugiat eos
        laudantium, iste, alias laboriosam eaque cupiditate ducimus quis dicta,
        voluptatibus blanditiis nihil quibusdam nemo facilis ipsum?
      </p>
    </div>
  );
};

export default Slug;
