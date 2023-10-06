import React from "react";
import styles from "./Redes.module.scss";
import { CardImg } from "reactstrap";

import { IoLogoWhatsapp } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export function Redes() {
  return (
    <div className={styles.space}>
       <div className={styles.contact}>
            <div className={styles.redes}>
          <label> 318 357 6551</label>
          <p>comercializadorafarmacali@hotmail.com</p>
          <p>Kra 15#54-53 CALI</p>
        </div>
      </div>
    </div>
  );
}
