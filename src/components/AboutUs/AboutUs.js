import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          Bienvenidos a Farma Cali En Farma Cali, nos enorgullece servir a
          la comunidad de Cali y sus alrededores con una amplia gama de
          servicios farmacéuticos y productos de alta calidad. Somos su destino
          confiable para todas sus necesidades de salud y bienestar.
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          En Farma Cali, nuestra misión es proporcionar atención farmacéutica
          de alta calidad y productos de salud confiables para mejorar la
          calidad de vida de nuestros clientes. Nos esforzamos por ser su aliado
          en su viaje hacia un bienestar óptimo.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          En Farma Cali, aspiramos a ser líderes en la industria farmacéutica
          de la región de Cali y sus alrededores. Nuestra visión es ser
          reconocidos como el destino preferido para la salud y el bienestar de
          nuestra comunidad. Nos esforzamos por brindar un servicio excepcional,
          productos de alta calidad y un enfoque personalizado que nos distinga
          como la farmacia de confianza de todos los residentes de Cali.
        </p>
      </div>

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
  );
}
