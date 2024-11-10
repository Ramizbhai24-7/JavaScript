// Singalton
// Object.create

// Object literals

const mySym = ("plmnkoijbhuygv") // Using Symbol or key ?

const JsUser = {
    name: "Ramiz",
    [mySym]: mySym,
    age: 28,
    email: "Ramiz@noon.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Seturday"],
}
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.geting = function(){
    console.log("Hello user!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.geting());
console.log(JsUser.greetingTwo());


