import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import download from "download";
import type { Candidate, Customer, Data, Person } from "./typeDefinitions";

const avatarFolder = "./public/avatar";

const generateData = (n: number): Data[] => {
  return [...Array(n)]
    .map(() => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      sex: faker.name.sex(),
      address: faker.address.streetAddress(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      age: Number(faker.random.numeric(2)),
    }))
    .map((person) => {
      if (Math.random() > 0.5) {
        return {
          ...person,
          type: "customer",
          address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
          phone: faker.phone.number(),
          creditCardNumber: faker.finance.creditCardNumber(),
          creditCardCCV: faker.finance.creditCardCVV(),
          creditCardIssuer: faker.finance.creditCardIssuer(),
          bio: faker.lorem.paragraph(3),
        } as Customer;
      } else {
        return {
          ...person,
          type: "candidate",
          job: faker.name.jobType(),
          experience: Number(faker.random.numeric(1)),
          intro: faker.lorem.paragraph(1),
        } as Candidate;
      }
    });
};

const saveImages = async (data: Data[]) => {
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
  const data: Data[] = generateData(n);

  saveImages(data);
  saveFile(data);

  await fs.writeFile("./src/data/fakeData.json", JSON.stringify(data, null, 2));
};

generateAndSaveData(25);
