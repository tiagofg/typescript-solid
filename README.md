# typescript-solid

Small, framework-free TypeScript examples of classic GoF design patterns. Each folder in `typescript/patterns` contains a minimal implementation you can copy or extend.

The repository currently covers 17 patterns. It is a focused example collection rather than a complete SOLID-principles curriculum.

## Pattern index

| Category | Examples |
| --- | --- |
| Creational | [Singleton](typescript/patterns/creational/singleton/index.ts), [Abstract Factory](typescript/patterns/creational/abstract-factory/index.ts), [Simple Factory](typescript/patterns/creational/factory/index.ts), [Builder](typescript/patterns/creational/builder/index.ts), [Prototype](typescript/patterns/creational/prototype/index.ts) |
| Structural | [Adapter](typescript/patterns/structural/adapter/index.ts), [Bridge](typescript/patterns/structural/bridge/index.ts), [Composite](typescript/patterns/structural/composite/index.ts), [Decorator](typescript/patterns/structural/decorator/index.ts), [Facade](typescript/patterns/structural/facade/index.ts) |
| Behavioral | [Strategy](typescript/patterns/behavioral/strategy/index.ts), [Chain of Responsibility](typescript/patterns/behavioral/chain-of-responsibility/index.ts), [Command](typescript/patterns/behavioral/command/index.ts), [Iterator](typescript/patterns/behavioral/iterator/index.ts), [Observer](typescript/patterns/behavioral/observer/index.ts), [State](typescript/patterns/behavioral/state/index.ts), [Template Method](typescript/patterns/behavioral/template/index.ts) |

## Setup and current execution status

Install the locked development dependencies with:

```bash
npm ci
```

The pattern files are standalone source examples and are not exported from a shared entry point. The checked-in `typescript/index.ts` is empty, while `index.html` references a missing `src/index.ts`. As a result, the declared Parcel `start` and `build` scripts do not currently provide a working way to run the examples. The repository also has no `tsconfig.json` or explicit TypeScript compiler dependency.

`npm test` is the package's placeholder script and exits with status 1; no automated tests are included.

## Learning notes and tradeoffs

These examples emphasize the shape of each pattern with short classes and interfaces. They intentionally leave out application wiring, module exports, error-handling policies, and broader domain concerns. When adapting one, consider whether the extra abstraction makes likely changes easier to manage; a direct implementation can be clearer when there is only one stable behavior.

The folder named `factory` implements a static `CarFactory.createCar` switch. It is described here as **Simple Factory**, because subclasses do not override a factory method.

## Patterns and usage

### Creational

**Singleton** — one shared instance with global state.
```ts
const first = Singleton.getInstance();
first.value = 42;
const second = Singleton.getInstance();
console.log(second.value); // 42
```

**Abstract Factory** — create families of related products without binding to concrete classes.
```ts
const factory = new Factory();
const productA = factory.createProductA();
const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
```

**Simple Factory** — centralize object creation behind a static factory function.
```ts
const suv = CarFactory.createCar('suv', 'Explorer', 2024);
const sedan = CarFactory.createCar('sedan', 'Accord', 2023);
suv.displayCarInfo();
sedan.displayCarInfo();
```

**Builder** — step-by-step construction using a director.
```ts
const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);
director.buildFullFeaturedProduct();
const product = builder.build();
console.log(product.listParts()); // Product parts: PartA1, PartB1, PartC1
```

**Prototype** — clone existing instances instead of recreating from scratch.
```ts
const original = new ConcretePrototype({ name: 'Alice', age: 30 });
const clone = original.clone() as ConcretePrototype;
clone.getDetails().name = 'Bob';
console.log(original.getDetails(), clone.getDetails());
```

### Structural

**Adapter** — make incompatible interfaces work together.
```ts
const square = new Square(4);
const rectangle: Rectangle = new SquareToRectangleAdapter(square);
console.log(rectangle.area()); // 16
```

**Bridge** — separate abstraction from implementation.
```ts
const player = new AudioPlayer(new WindowsMediaPlayer());
player.playFile('song.mp3');
```

**Composite** — treat individual objects and compositions uniformly.
```ts
const dev = new Developer('Sam', 70000);
const designer = new Designer('Ava', 68000);
const manager = new Manager('Lee', 90000);
manager.add(dev);
manager.add(designer);
console.log(manager.getSubordinates().map(s => s.getRole()));
```

**Decorator** — dynamically add behavior to objects.
```ts
const coffee: Coffee = new MilkDecorator(new SimpleCoffee());
console.log(coffee.description(), coffee.cost()); // "Simple Coffee, with Milk", 7
```

**Facade** — provide a simple interface to a complex subsystem.
```ts
const machine = new CoffeeMachineFacade();
console.log(machine.makeCoffee());
```

### Behavioral

**Strategy** — swap algorithms at runtime.
```ts
const cart = new ShoppingCart(new PayPalPayment());
cart.addToCart(25);
cart.setPaymentStrategy(new BitcoinPayment());
cart.checkout(); // Paid 25 using Bitcoin
```

**Chain of Responsibility** — pass requests along a chain until someone handles them.
```ts
const monkey = new MonkeyHandler();
monkey.setNext(new SquirrelHandler()).setNext(new DogHandler());
['Banana', 'Nut', 'MeatBall'].forEach(food => console.log(monkey.handle(food)));
```

**Command** — encapsulate requests as objects with undo support.
```ts
const light = new Light();
const remote = new RemoteControl();
remote.setCommand(new LightOnCommand(light));
remote.buttonPressed(); // The light is ON
remote.undoButtonPressed(); // The light is OFF
```

**Iterator** — sequentially access elements without exposing the collection.
```ts
const iterator = new ArrayIterator(['a', 'b', 'c']);
while (iterator.hasNext()) console.log(iterator.next());
```

**Observer** — notify dependents automatically when state changes.
```ts
const subject = new ConcreteSubject();
subject.addObserver(new ConcreteObserver(1));
subject.addObserver(new ConcreteObserver(2));
subject.setState(99); // both observers are notified
```

**State** — allow an object to alter its behavior when its internal state changes.
```ts
const lightSwitch = new LightSwitch(new OffState());
lightSwitch.pressSwitch(); // Turning the light ON
lightSwitch.pressSwitch(); // Turning the light OFF
```

**Template Method** — define the skeleton of an algorithm, letting subclasses fill steps.
```ts
new ChocolateCake().bakeCake();
new VanillaCake().bakeCake();
```
