# typescript-solid

Small, framework-free TypeScript examples of classic GoF design patterns. Each folder in `typescript/patterns` contains a minimal implementation you can copy or extend.

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

**Factory Method** — delegate object creation to a factory class.
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
