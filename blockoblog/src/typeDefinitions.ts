export interface Person {
  name: string;
  sex: string;
  address: string;
  avatar: string;
  email: string;
  age: number;
}

export interface Candidate extends Person {
  type: "candidate";
  job: string;
  experience: number;
  intro: string;
}

export interface Customer extends Person {
  type: "customer";
  address: string;
  phone: string;
  creditCardNumber: string;
  creditCardCCV: string;
  creditCardIssuer: string;
  bio: string;
}

export type Data = Candidate | Customer;
