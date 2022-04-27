const Employee = require("./Employee.js")
 
class Manager extends Employee{
   constructor (name, id, email, number){
       super (name, id, email, 'Manager')
       this.number = number
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

    getNumber(){
        console.log(this.github)
    }
}
 
module.exports = Manager