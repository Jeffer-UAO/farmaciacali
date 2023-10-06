import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>FARMA CALI</h1>
        <div className={styles.phone}>
          <h5>Línea de atención</h5>
          <ul>
            <li>(+57) 318 357 6551</li>
          </ul>
        </div>

        {/* <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Carrera 16 No. 22 – 39 Cali – Valle</p>
      </div> */}
      </div>
      <FooterApp />
    </>
  );
}
