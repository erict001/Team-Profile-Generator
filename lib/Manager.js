const Employee = require("./Employee.js")
 
class Manager extends Employee{
   constructor (name, id, email, number){
       super (name, id, email)
       this.number = number
   }
}
 
module.exports = Manager