import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1> Home </h1>

      <Link href="/contac/test">
        Go to contact test
      </Link>

    </div>
  );
}
