const Employee = require("./Employee")
 
class Manager extends Employee{
   constructor (name, id, email, number){
       super (name, id, email, 'Manager')
       this.number = number
   }
   getName(){
    return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getNumber(){
        return this.number
    }
}
 
module.exports = Manager;