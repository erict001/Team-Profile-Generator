const Employee = require("./Employee.js")
 
class Engineer extends Employee{
   constructor (name, id, email, github){
       super (name, id, email, 'Engineer')
       this.github = github
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

    getGithub(){
        console.log(this.github)
    }
}
 
module.exports = Engineer