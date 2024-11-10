//  Date

let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)


let myCreatedDate1 = new Date("1996-07-24");
console.log(myCreatedDate1.toDateString());  // Tue Jul 23 1996 (in local timezone)

let myCreatedDate2 = new Date(1996, 6, 24);  // Month is zero-indexed (0 = January, 6 = July)
console.log(myCreatedDate2.toDateString());  // Tue Jul 23 1996 (in local timezone)


let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate1.getTime())

console.log(Date.now()/1000)

console.log(Math.floor(Date.now()/1000))