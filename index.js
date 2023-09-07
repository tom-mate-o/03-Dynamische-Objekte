const personPrototype = {
  name: "Unknown",
  age: 0,
  logCredentials() {
    console.log(`Credentials:\nName: ${this.name}\nAge: ${this.age}`);
  },
};

let personOne = Object.create(personPrototype);
let personTwo = Object.create(personPrototype);

let persons = [personOne, personTwo];

persons.forEach((element) => {
  element.name = prompt("Gebe eine Namen für den Account an!");
  const ageInput = Number(prompt("Gebe ein Alter an für die Person an!"));
  typeof ageInput == "number"
    ? (element.age = ageInput)
    : (element.age = "NaN");
});

console.log(persons[0], persons[1]);
