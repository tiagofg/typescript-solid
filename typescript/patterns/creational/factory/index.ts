abstract class Car {
  constructor(public model: string, public productionYear: number) { }

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  displayCarInfo(): void {
    console.log(`Sedan Model: ${this.model}, Year: ${this.productionYear}`);
  }
}

class SUV extends Car {
  displayCarInfo(): void {
    console.log(`SUV Model: ${this.model}, Year: ${this.productionYear}`);
  }
}

class Hatchback extends Car {
  displayCarInfo(): void {
    console.log(`Hatchback Model: ${this.model}, Year: ${this.productionYear}`);
  }
}

class CarFactory {
  static createCar(type: string, model: string, productionYear: number): Car {
    switch (type.toLowerCase()) {
      case 'sedan':
        return new Sedan(model, productionYear);
      case 'suv':
        return new SUV(model, productionYear);
      case 'hatchback':
        return new Hatchback(model, productionYear);
      default:
        throw new Error('Unknown car type');
    }
  }
}