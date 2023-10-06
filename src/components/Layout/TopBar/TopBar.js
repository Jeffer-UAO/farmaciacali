import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
      <div className={styles.topBar}>
        <Link href="/">
          {/* <CardImg src="/image/logo.webp" alt="Lekar" />{" "} */}
          <h2>COMERCIALIZADORA</h2>
          <h1>FARMA CALI</h1>
        </Link>       
      </div>     
    </div>
  );
}
