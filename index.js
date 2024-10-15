class Person{
    constructor(username,userAge,isUsermarried){
        this.name=username;
        this.age=userAge;
        this.isMarried=isUsermarried;
    }
    eat(food){
        return ` ${this.sleep()} after ${this.name} is Eating ${food}`;
    }
    sleep(){
        return `${this.name} is Sleeping`;
    }
    speak(){
        return `${this.name} is Speaking`;
    } 
}
var ahmad=new Person("Ahmad",25,false);
console.log(ahmad.eat("mansaf"));
console.log(ahmad.sleep());
console.log(ahmad.speak());

var nada=new Person("nada",23,true);
console.log(nada.eat());
console.log(nada.sleep());
console.log(nada.speak());
