let myName: string = "Bob";

// Custom type
type IFood = string;

let myFOod: IFood = "Pizza";

type IAddress = {
  street: string;
  city: string;
};

// Objet custom type
type IPerson = {
  name: string;
  age: number;
  isStudent: boolean;
  addres?: IAddress;
};

let person: IPerson = {
  name: "John Doe",
  age: 20,
  isStudent: true,
};

// Array types
const personList: IPerson[] = [person];
const people: Array<IPerson> = [person];

// Union types
type IUserRole = "guest" | "member" | "admin";
const currentRole: IUserRole = "member";

// Function return type
function getUserDetails(username: string): IPerson {
  console.log({ username });
  return person;
}

// Void return type. => Doesnot have return type
function pushUsers(item: IPerson) {
  let arr: IPerson[] = [];
  arr.push(item);
}
