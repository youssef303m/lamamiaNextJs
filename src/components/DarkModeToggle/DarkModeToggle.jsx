"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon} style={mode === "light" && { opacity: 0 }}>
        🌙
      </div>
      <div className={styles.icon} style={mode === "dark" && { opacity: 0 }}>
        ☀️
      </div>
      <div
        className={styles.ball}
        style={mode === "light" ? { right: "22px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
