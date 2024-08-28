import React from "react";
import styles from "./DefaultPage.module.css";
import defaultIMG from "../assets/defaultIMG.png";
import encrypt from "../assets/encrypt.png";
export default function DefaultPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.defaultIMG} src={defaultIMG} alt="image" />
      </div>
      <div className={styles.header}>
        <h2 className={styles.Heading}>Pocket Notes</h2>
        <p className={styles.info}>
          Send and receive messages without keeping your phone online.
          <br/> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.footer}>
        <img className={styles.encrypt} src={encrypt} alt="lock" />
        <p className={styles.footerInfo}>end-to-end encrypted</p>
      </div>
    </div>
  );
}
