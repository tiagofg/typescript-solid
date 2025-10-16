interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(other: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  operationA(): string {
    return 'Result of ProductA1';
  }
}

class ProductB implements IProductB {
  operationB(): string {
    return 'Result of ProductB1';
  }

  combinedOperation(other: IProductA): string {
    const result = other.operationA();
    return `ProductB1 combines with (${result})`;
  }
}

class Factory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }
  
  createProductB(): IProductB {
    return new ProductB();
  }

}