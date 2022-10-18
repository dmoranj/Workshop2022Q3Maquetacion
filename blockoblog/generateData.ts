import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import download from "download";

interface Person {
  name: string;
  sex: string;
  address: string;
  avatar: string;
  email: string;
}

interface Candidate extends Person {
  type: "candidate";
  job: string;
}

interface Customer extends Person {
  type: "customer";
  address: string;
  phone: string;
}

const avatarFolder = "./public/avatar";

type Data = (Candidate | Customer)[];

const generateData = (n: number): Data => {
  return [...Array(n)]
    .map(() => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      sex: faker.name.sex(),
      address: faker.address.streetAddress(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
    }))
    .map((person) => {
      if (Math.random() > 0.5) {
        return {
          ...person,
          type: "customer",
          address: `${faker.address.streetAddress()}, ${faker.address.city}`,
          phone: faker.phone.number(),
        } as Customer;
      } else {
        return {
          ...person,
          type: "candidate",
          job: faker.name.jobType(),
        } as Candidate;
      }
    });
};

const saveImages = async (data: Data) => {
  data.map(async (element) => {
    const { avatar, ...rest } = element;

    const fileName = avatar.substring(avatar.lastIndexOf("/") + 1);
    const targetPath = `${avatarFolder}/${fileName}`;

    await download(avatar, avatarFolder);

    return {
      ...rest,
      avatar: targetPath,
    };
  });
};

const saveFile = async (data: Person[]) => {
  await fs.writeFile("./src/data/fakeData.json", JSON.stringify(data, null, 2));
};

const generateAndSaveData = async (n: number) => {
  const data: Data = generateData(n);

  saveImages(data);
  saveFile(data);

  await fs.writeFile("./src/data/fakeData.json", JSON.stringify(data, null, 2));
};

generateAndSaveData(10);
