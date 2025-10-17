class Grinder {
  grind() {
    return 'Grinding coffee beans...\n';
  }
}

class Boiler {
  boil() {
    return 'Boiling water...\n';
  }
}

class Brewer {
  brew() {
    return 'Brewing the coffee...\n';
  }
}

class CoffeeMachineFacade {
  private grinder: Grinder;
  private boiler: Boiler;
  private brewer: Brewer;
  
  constructor() {
    this.grinder = new Grinder();
    this.boiler = new Boiler();
    this.brewer = new Brewer();
  }

  makeCoffee() {
    let result = '';

    result += this.grinder.grind();
    result += this.boiler.boil();
    result += this.brewer.brew();
    result += 'Coffee is ready!\n';
    
    return result;
  }
}

