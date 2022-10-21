import styles from './App.module.scss';

const TrivialSquare = ({number, reverse}) => {
  const direction = reverse? "left": "right";

  return <div  className={`${styles.sideSquare} ${styles["sideSquare" + (number+1) + direction]}`}>
  </div>
}

const TrivialSection = ({id}) => {
  return <div className={`${styles.sector} ${styles["trivialSection"+id]}`}>
    <div className={styles.upper}>
      <div className={styles.leftwards}>
        {[...Array(4)].map((x, i) => (<TrivialSquare number={i} reverse/>))}
      </div>
      <div className={`${styles.quesitoSquare} ${styles["color" + id]}`}></div>
      <div className={styles.rightwards}>
        {[...Array(4)].map((x, i) => (<TrivialSquare number={i} />))}
      </div>
    </div>

    <div className={styles.downwards}>
      {[...Array(7)].map(x => (<div className={styles.downSquare}></div>))}
    </div>
  </div>
}

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.board}>
      </div>
      {[...Array(6)].map((x, i)=> (<TrivialSection id={i+1}/>))}
      {[...Array(4)].map((x, i) => (<div className={styles[`logoTrivial${i}`]}><img src="logoTrivial.png" alt="Logo trivial"/></div>))}
    </div>
  );
}

export default App;
