let studnets = 0
let student = function(name, age, phone, boardMarks) {
  this.name = name
  this.age = age
  this.phone = phone
  this.boardMarks = boardMarks
  studnets++
}

const checkEligibility = function() {
  if (this.boardMarks > 40) {
    console.log(`${this.name} is Eligible`)
  } else {
    console.log(`${this.name} is Not Eligible`)
  }
}

let totalstudetns = function() {
  return studnets
}

let s1 = new student('sunil', 24, '99768717', 45)
let s2 = new student('pankaj', 34, '99923427137', 35)
let s3 = new student('rahul', 24, '993243297137', 78)
let s4 = new student('ram', 22, '9992347137', 56)
let s5 = new student('jeetu', 25, '7867137', 55)
let s6 = new student('jeetu', 25, '7867137', 55)
checkEligibility.call(s1)
checkEligibility.call(s2)

console.log(totalstudetns())

