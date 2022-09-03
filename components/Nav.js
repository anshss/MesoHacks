import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const [active, setActive] = React.useState(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {active ? (
          <>
            <Link href="/">
              <img
                className={styles.icon}
                src="https://img.icons8.com/material-rounded/48/000000/dashboard-layout.png"
              />
            </Link>
            <Link href="/createpost">
              <img
                onClick={() => setActive(false)}
                className={styles.icon2}
                src="https://img.icons8.com/48/FFFFFF/create-new.png"
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <img
                onClick={() => setActive(true)}
                className={styles.icon2}
                src="https://img.icons8.com/material-rounded/48/FFFFFF/dashboard-layout.png"
              />
            </Link>
            <Link href="/createpost">
              <img
                className={styles.icon}
                src="https://img.icons8.com/48/000000/create-new.png"
              />
            </Link>
          </>
        )}
      </div>
      <hr />
    </div>
  );
}
