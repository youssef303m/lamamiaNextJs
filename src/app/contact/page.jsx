import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Let's Keep in Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            cols="30"
            rows="10"
            className={styles.textArea}
            placeholder="Message"
          ></textarea>
          <Button url="#" text="Set" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
