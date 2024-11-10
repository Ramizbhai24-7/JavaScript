// const noonUser = new Object()
const noonUser = {}

noonUser.Name = "Ramiz"
noonUser.Id = 1234
noonUser.IsLoggedIn = false

// console.log(noonUser);

const celebUser = {
    email: "Ramiz@admin.com",
    fullName: {
        firstName: "Ramiz",
        lastName: "Pinjara"
    }
}

// console.log(celebUser.email);
// console.log(celebUser.fullName);
// console.log(celebUser.fullName.firstName);
// console.log(celebUser.fullName.lastName);

const Obj1 = { 1: "a", 2: "b"}
const Obj2 = { 3: "c", 4: "d"}
const Obj3 = { 5: "e", 6: "f"}

// const Obj4 = { Obj1, Obj2, Obj3 }
// const Obj4 = Object.assign({}, Obj1, Obj2, Obj3)

const Obj4 = { ...Obj1, ...Obj2, ...Obj3}


// console.log(Obj4);

console.log(noonUser);

console.log(Object.keys(noonUser))
console.log(Object.values(noonUser))
console.log(Object.entries(noonUser))


console.log(noonUser.hasOwnProperty("Idn"))

