// 1. Basic types
let myName: string = "Bob";
let isAvailable: boolean = true;

//2. Custom type
type IFood = string;

let myFOod: IFood = "Pizza";

type IAddress = {
  street: string;
  city: string;
};

//3. Objet custom type and optional
type IPerson = {
  id: number;
  name: string;
  age: number;
  isStudent: boolean;
  addres?: IAddress;
};

let person: IPerson = {
  id: 1,
  name: "John Doe",
  age: 20,
  isStudent: true,
};

// Array types
const personList: IPerson[] = [person];
const people: Array<IPerson> = [person];

// 4. Union types
type IUserRole = "guest" | "member" | "admin";
const currentRole: IUserRole = "member";

// 5. Function return type
function getUserDetails(username: string): IPerson {
  console.log({ username });
  return person;
}

// Void return type. => Doesnot have return type
function pushUsers(item: IPerson) {
  let arr: IPerson[] = [];
  arr.push(item);
}

//======6. Utility type====//
//Like a funtion, take other types as input params and return new type

// 6.1 Partial ===> Make keys optional
type IUpdatePayload = Partial<IPerson>;

function updateUser(id: number, payload: IUpdatePayload) {
  return { id, ...payload };
}

// 6.2 Omit ===> Omit 'id' from IPerson
function addNewUser(newUser: Omit<IPerson, "id">) {}

//======7. Generics=======
// Act like function parameters, but for types
// Add flexibility to existing functions, and types
// Use angle <> bracket

enum STATUS {
  PENDING = "Pending",
  DONE = "Done",
}

type IVote = {
  id: number;
  name: string;
  status: "Pending" | "Done";
};

//====Example====
const gameScores = [1, 2, 3, 4, 5];
const favThings = ["raindrops", "mountains"];
const voters = [
  { id: 1, name: "John Doe", status: STATUS.PENDING },
  { id: 2, name: "Jane Do", status: STATUS.DONE },
];

function getLastItem<MyType>(array: MyType[]): MyType | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favThings));
console.log(getLastItem<IVote>(voters)); // Explicit generic fix
