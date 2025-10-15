interface Builder {
  setPartA(partA: string): void;
  setPartB(partB: string): void;
  setPartC(partC: string): void;
  build(): Product;
}

class Product {
  private parts: string[] = [];
  
  public addPart(part: string): void {
    this.parts.push(part);
  }

  public listParts(): string {
    return `Product parts: ${this.parts.join(', ')}`;
  }
}

class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(partA: string): void {
    this.product.addPart(partA);
  }

  public setPartB(partB: string): void {
    this.product.addPart(partB);
  }

  public setPartC(partC: string): void {
    this.product.addPart(partC);
  }

  public build(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.setPartA('PartA1');
  }

  public buildFullFeaturedProduct(): void {
    this.builder.setPartA('PartA1');
    this.builder.setPartB('PartB1');
    this.builder.setPartC('PartC1');
  }
}