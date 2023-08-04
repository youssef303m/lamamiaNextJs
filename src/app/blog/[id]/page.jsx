import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill="true" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptates magnam libero ab necessitatibus placeat neque nam nemo,
          maxime alias id, voluptas ut molestiae distinctio quidem quae
          architecto provident illum debitis nihil laborum deserunt a obcaecati
          vel! At dolor voluptate voluptatum omnis reprehenderit. Sequi, culpa!
          Pariatur facere laborum doloribus perferendis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptatem voluptates magnam libero
          ab necessitatibus placeat neque nam nemo, maxime alias id, voluptas ut
          molestiae distinctio quidem quae architecto provident illum debitis
          nihil laborum deserunt a obcaecati vel! At dolor voluptate voluptatum
          omnis reprehenderit. Sequi, culpa! Pariatur facere laborum doloribus
          perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem voluptates magnam libero ab necessitatibus placeat neque
          nam nemo, maxime alias id, voluptas ut molestiae distinctio quidem
          quae architecto provident illum debitis nihil laborum deserunt a
          obcaecati vel! At dolor voluptate voluptatum omnis reprehenderit.
          Sequi, culpa! Pariatur facere laborum doloribus perferendis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptates magnam libero ab necessitatibus placeat neque nam nemo,
          maxime alias id, voluptas ut molestiae distinctio quidem quae
          architecto provident illum debitis nihil laborum deserunt a obcaecati
          vel! At dolor voluptate voluptatum omnis reprehenderit. Sequi, culpa!
          Pariatur facere laborum doloribus perferendis.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
