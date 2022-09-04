/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Login from "./LoginBtn.js";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(true);

  return (
    <div className={styles.Navbar}>
      <div className={styles.container}>
        {active ? (
          <>
            <Link href="/">
              <img
                className={styles.icon}
                src="https://img.icons8.com/material-rounded/48/000000/dashboard-layout.png"
              />
            </Link>
            <Link href="/post">
              <img
                onClick={() => setActive(false)}
                className={styles.iconActive}
                src="https://img.icons8.com/48/FFFFFF/create-new.png"
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <img
                onClick={() => setActive(true)}
                className={styles.iconActive}
                src="https://img.icons8.com/material-rounded/48/FFFFFF/dashboard-layout.png"
              />
            </Link>
            <Link href="/post">
              <img
                className={styles.icon}
                src="https://img.icons8.com/48/000000/create-new.png"
              />
            </Link>
          </>
        )}
      </div>
      {/* <div className={styles.line}></div> */}
      <hr />
    </div>
  );
}
