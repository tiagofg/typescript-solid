interface UserDetails {
  name: string;
  age: number;
}

interface Prototype {
  clone(): Prototype;
  getDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private details: UserDetails) {}

  clone(): Prototype {
    const clone = Object.create(this);
    clone.details = { ...this.details };

    return clone;
  }

  public getDetails(): UserDetails {
    return this.details;
  }
}