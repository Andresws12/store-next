import styles from "./page.module.scss";

import Link from "next/link";

import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className={styles.page}>
      <h1> Home </h1>

      <Link href="/contac/test">Go to contact test</Link>

    </div>
  );
}
