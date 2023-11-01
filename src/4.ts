class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random() * 100;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: object;

  constructor(key: object) {
    this.key = key;
  }

  getKey(): object {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  protected key: object;
  private tenants: object[];

  constructor(key: object){
    this.key = key;
  }

  public abstract openDoor(key: object): void;

  public comeIn(person: object): void {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  public openDoor(key: object): void {
    if (this.key === key) {
      this.door = true;
    }
  }
}

const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};