abstract class CakeRecipe {
  protected preHeatOven(): void {
    console.log("Preheating the oven to 350 degrees Fahrenheit.");
  }

  protected bake(): void {
    console.log("Baking the cake for 30 minutes.");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake for 15 minutes.");
  }

  protected decorateCake(): void {
    console.log("Decorating the cake with frosting and toppings.");
  }

  protected abstract mixIngredients(): void;

  public bakeCake(): void {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorateCake();
  }
}

class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing ingredients for Chocolate Cake: flour, sugar, cocoa powder, eggs, and butter.");
  }

  protected decorateCake(): void {
    console.log("Decorating the Chocolate Cake with chocolate frosting and sprinkles.");
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing ingredients for Vanilla Cake: flour, sugar, vanilla extract, eggs, and butter.");
  }

  protected decorateCake(): void {
    console.log("Decorating the Vanilla Cake with vanilla frosting and fresh fruits.");
  }
}