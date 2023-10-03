import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.image}>
        <img
          src="https://i.fbcd.co/products/resized/resized-750-500/d-od-do-modern-logo-designs-2-6df018f33684e856f804b62d86929f292231e526a513a518dd52185c6e1c7a82.webp"
          alt="BankLogo"
        />
      </div>
      <h2 className={styles.name1}>Bodima </h2>
      <strong>
        <h2 className={styles.name2}>Bank</h2>
      </strong>

      <div className={styles.navbtn}>
        <a href="#">
          <button className={styles.btn1}>Log In</button>
        </a>
        <button className={styles.btn2}>Sign Up</button>
      </div>
    </div>
  );
}
