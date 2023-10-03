import React from "react";
import styles from "./navbar1.module.css";

export default function Navbar1() {
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
      <img
        className={styles.profilepic}
        src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        alt="ProfilePic"
      />
      <div className={styles.profilename}>
        <p>Didula Sri Lakpriya</p>
      </div>
      <div className={styles.dropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        <ul className={styles.dropdownmenu}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            Profile
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 1v7h1V1h-1z" />
              <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
            </svg>
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}
