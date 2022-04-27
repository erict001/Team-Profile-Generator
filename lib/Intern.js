const Employee = require("./Employee.js")
 
class Intern extends Employee{
   constructor (name, id, email){
       super (name, id, email, 'Intern')
       this.school = school
   }
   getName(){
    console.log(this.name)
    }

    getId(){
        console.log(this.id)
    }

    getEmail(){
        console.log(this.email)
    }

    getSchool(){
        console.log(this.school)
    }
}
 
module.exports = Intern