import React from "react";
//import styles from "./app.module.scss";
import styles from "./blank.module.scss";
import data from "./data/fakeData.json";
import type { Candidate, Customer } from "./typeDefinitions";
import type { Data } from "./typeDefinitions";

interface CustomerProps {
  index: number;
  data: Customer;
}

const CustomerBox: React.FC<CustomerProps> = ({ index, data }) => {
  return (
    <div className={`${styles.person} ${styles.customer}`} key={index}>
      <div className={styles.name}>
        <div className={styles.label}>Name</div>
        <div className={styles.value}>{data.name}</div>
      </div>
      <div className={styles.email}>
        <div className={styles.label}>eMail</div>
        <div className={styles.value}>{data.email}</div>
      </div>
      <div className={styles.phone}>
        <div className={styles.label}>Phone</div>
        <div className={styles.value}>{data.phone}</div>
      </div>
      <div className={styles.address}>{data.address}</div>
      <div className={styles.sex}>
        <div className={styles.label}>Sex</div>
        <div className={styles.value}>{data.sex}</div>
      </div>
      <div className={styles.age}>
        <div className={styles.label}>Age</div>
        <div className={styles.value}>{data.age}</div>
      </div>
      <div className={styles.avatar}>
        <img src={data.avatar}></img>
      </div>
      <div className={styles.bio}>{data.bio}</div>
    </div>
  );
};

interface CandidateProps {
  index: number;
  data: Candidate;
}

const CandidateBox: React.FC<CandidateProps> = ({ index, data }) => {
  return (
    <div className={`${styles.person} ${styles.candidate}`} key={index}>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.sex}>{data.sex}</div>
      <div className={styles.job}>{data.job}</div>
      <div className={styles.address}>{data.address}</div>
      <div className={styles.email}>{data.email}</div>
      <div className={styles.age}>{data.age}</div>
      <div className={styles.avatar}>
        <img src={data.avatar}></img>
      </div>
      <div className={styles.experience}>{data.experience}</div>
      <div className={styles.intro}>{data.intro}</div>
    </div>
  );
};

const People = () => {
  const people = data as unknown as Data[];

  return (
    <div className={styles.people}>
      {people.map((element: Data, index) =>
        element.type === "customer" ? (
          <CustomerBox key={index} data={element} index={index} />
        ) : (
          <CandidateBox key={index} data={element} index={index} />
        )
      )}
    </div>
  );
};

const Title = () => {
  return <div className={styles.title}>Blockoblog</div>;
};

const Stats = () => {
  const people = data as unknown as Data[];
  const { customers, candidates, totalAge } = people.reduce(
    (stats, current) => {
      if (current.type === "customer") {
        stats.customers += 1;
      } else {
        stats.candidates += 1;
      }
      stats.totalAge += Number(current.age);
      return stats;
    },
    { customers: 0, candidates: 0, totalAge: 0 }
  );

  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <div className={styles.label}>Persons</div>
        <div className={styles.value}>{people.length}</div>
      </div>
      <div className={styles.stat}>
        <div className={styles.label}>Customers</div>
        <div className={styles.value}>{customers}</div>
      </div>
      <div className={styles.stat}>
        <div className={styles.label}>Candidates</div>
        <div className={styles.value}>{candidates}</div>
      </div>
      <div className={styles.stat}>
        <div className={styles.label}>Mean age</div>
        <div className={styles.value}>
          {Math.round(totalAge / people.length)}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className={styles.root}>
      <Title />
      <div className={styles.content}>
        <People />
        <Stats />
      </div>
    </div>
  );
};

export default App;
