interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  public turnOn(): void {
    console.log("The light is ON");
  }

  public turnOff(): void {
    console.log("The light is OFF");
  }
}

class LightOnCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.turnOn();
  }

  public undo(): void {
    this.light.turnOff();
  }
}

class LightOffCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.turnOff();
  }

  public undo(): void {
    this.light.turnOn();
  }
}

class RemoteControl {
  private currentCommand: ICommand | null = null;
  private undoCommand: ICommand | null = null;
  private commandQueue: ICommand[] = [];

  public setCommand(command: ICommand): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;

    this.commandQueue.push(command);
  }

  public buttonPressed(): void {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift()!;
      command.execute();
    } else {
      console.log("No command to execute.");
    }
  }

  public undoButtonPressed(): void {
    if (this.undoCommand) {
      this.undoCommand.undo();
    } else {
      console.log("No command to undo.");
    }
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}