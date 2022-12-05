let studnets = 0;
class Student {

  constructor(name, age, Marks) {
    this.name = name;
    this.age = age;
    this.Marks = Marks;
    studnets++
  }

  checkEligibility = () => {
    let that = this.Marks
    let name = this.name
    return that > 40 ? `${name} is eligible` : `${name} in not eligible`
  }

  totalstudetns = function() {
    return studnets
  }
}



let s1 = new Student('sunil', 24, '99768717', 45)
let s2 = new Student('pankaj', 34, '99923427137', 35)
let s3 = new Student('rahul', 24, '993243297137', 78)
let s4 = new Student('ram', 22, '9992347137', 56)
let s5 = new Student('jeetu', 25, '7867137', 55)
let s6 = new Student('jeetu', 25, '7867137', 55)

console.log(s1.checkEligibility())
console.log(s2.checkEligibility())
console.log(s3.checkEligibility())
console.log(s4.checkEligibility())
console.log(s5.checkEligibility())