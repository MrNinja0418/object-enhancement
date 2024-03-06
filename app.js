const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName,
});

const favoriteNumber = 42;
const instructor = {
  firstname: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  },
};

const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    return noise;
  },
});
