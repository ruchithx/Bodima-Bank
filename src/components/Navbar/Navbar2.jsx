import React from "react";
import styles from "./navbar2.module.css";

export default function Navbar2() {
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

      <div className={styles.navcontent}>
        <ul>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Deposit Money</a>
          </li>
          <li>
            <a href="#">Loan</a>
          </li>
        </ul>
      </div>
      <img
        className={styles.profilepic}
        src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        alt="ProfilePic"
      />
      <div className={styles.profilename}>
        <p>Didula Sri Lakpriya</p>
      </div>
    </div>
  );
}
