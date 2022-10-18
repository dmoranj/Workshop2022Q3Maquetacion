import styles from './App.module.scss'
//import styles from './blank.module.scss'

import { useState } from 'react'

const robots = [
  {
    id: 1,
    name: "Cool robot eating steak",
    style: "Digital ilustration",
    price: 20000
  },
  {
    id: 2,
    name: "Robot hanging out with his friend Joe",
    style: "Photograph",
    price: 34000
  },
  {
    id: 3,
    name: "Drunken robot at the beach",
    style: "Photograph",
    price: 213
  },
  {
    id: 4,
    name: "Happy robots happily hiking",
    style: "Collage over temper painting",
    price: 62000
  },
  {
    id: 5,
    name: "Micro-robots looking for his lost friend",
    style: "Sculpture",
    price: 14
  },
  {
    id: 6,
    name: "XVIIth century lady robots playing chess",
    style: "Oil painting",
    price: 520000
  },
]

export const Paintings = () => {
  return <div className={styles.paintings}>
    {robots.map((robot, i) => <>
      <div className={styles.painting}>
        <div className={styles.paintingImageContainer}>
          <img className={styles.paintingImage} src={`./images/${robot.id}.png`} alt={robot.name}/>
        </div>
        <div className={styles.paintingData}>
          <div className={styles.paintingName}>{robot.name}</div>
          <div className={styles.paintingStyle}>{robot.style}</div>
          <div className={styles.paintingPrice}>{robot.price}$</div>
        </div>
      </div>
      <div className={styles.joint}>
        <div className={`${styles.jointBolt}`}></div>
        <div className={`${styles.jointBolt} ${styles.jointRear}`}></div>
        <div className={`${styles.jointBolt} ${styles.jointRear}`}></div>
        <div className={`${styles.jointBolt}`}></div>
      </div>
    </>)}
  </div>
}

export const Visor = () => {
  const [showVisor, setShowVisor] = useState(false);


  return <div className={`${styles.visor}`}>
    <div className={styles.visorBar}>
      <button className={styles.visorButton} onClick={() => setShowVisor(!showVisor)}>Show</button>
      <button className={styles.visorButton}>Reserve</button>
      <button className={styles.visorButton}>Checkout cart</button>
    </div>
    <div className={`${styles.visorScreen}  ${showVisor?"":styles.visorHidden}`}>
      <div className={styles.visorExplanation}>Your cart has currently the following elements:</div>
      <ul className={styles.visorElements}>
        <li>Robot hanging out with his friend Joe</li>
        <li>Micro-robots looking for his lost friend</li>
      </ul>
    </div>
  </div>
}

export const Carrito = () => {
  return <div className={styles.carrito}></div>
}

function App() {
  return (
    <div className={styles.root}>
      <Visor />
      <Paintings />
    </div>
  );
}

export default App;
