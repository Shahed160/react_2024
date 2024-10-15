class Person{
    constructor(username,userAge,isUsermarried){
        this.name=username;
        this.age=userAge;
        this.isMarried=isUsermarried;
    }
    eat(){
        return `${this.name} is Eating`;
    }
    sleep(){
        return `${this.name} is Sleeping`;
    }
    speak(){
        return `${this.name} is Speaking`;
    } 
}
var ahmad=new Person("Ahmad",25,false);
console.log(ahmad.eat());
console.log(ahmad.sleep());
console.log(ahmad.speak());

var nada=new Person("nada",23,true);
console.log(nada.eat());
console.log(nada.sleep());
console.log(nada.speak());
