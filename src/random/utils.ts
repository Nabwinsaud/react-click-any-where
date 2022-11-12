class Person {
  public name: string = "";
  public profession: string = "";
}

class MobileDeveloper extends Person {
  public setName(name: string) {
    this.name = name;
    this.profession = "Flutter developer";
  }

  getName() {
    return `username is ${this.name} and profession is ${this.profession}`;
  }
}

class BackendDeveloper extends Person {
  public setName(name: string) {
    this.name = name;
    this.profession = "Nodejs developer";
  }

  public getName() {
    return `username :${this.name} and profession is ${this.profession}`;
  }
}

const person1 = new MobileDeveloper();
person1.setName("Nabin");
export {};
