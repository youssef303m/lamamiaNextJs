import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
            repellendus.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi
            optio voluptatem cumque eius nemo veniam eos? Quos, quas error, nam,
            ut architecto illum laborum veniam aspernatur incidunt
            necessitatibus maiores. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Deserunt, repellendus.
          </p>
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
