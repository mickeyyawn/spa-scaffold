class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}
  


export default function foo() {
    
    console.log('this is the foo func!');

    let user = new User("John");
    user.sayHi();

}