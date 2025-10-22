interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}
  
  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }
  
  getRole(): string {
    return 'Developer';
  } 

}

class Designer implements Employee {
  constructor(private name: string, private salary: number) {}
  
  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }
  
  getRole(): string {
    return 'Designer';
  } 
}

interface CompositeEmployee extends Employee {
  add(employee: Employee): void;
  remove(employee: Employee): void;
  getSubordinates(): Employee[];
}

class Manager implements CompositeEmployee {
  private subordinates: Employee[] = [];

  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return 'Manager';
  }

  add(employee: Employee): void {
    this.subordinates.push(employee);
  }

  remove(employee: Employee): void {
    const index = this.subordinates.indexOf(employee);
    if (index !== -1) {
      this.subordinates.splice(index, 1);
    }
  }

  getSubordinates(): Employee[] {
    return this.subordinates;
  }
}
