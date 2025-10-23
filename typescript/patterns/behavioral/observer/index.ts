interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
  private id: number;
  
  constructor(id: number) {
    this.id = id;
  }

  update(subject: Subject): void {
    console.log(`Observer ${this.id} notified. New State: ${subject.getState()}`);
  }
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = []
  private state: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  getState(): number {
    return this.state;
  }

  setState(state: number): void {
    this.state = state;
    this.notifyObservers();
  }
}