interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}

class LightSwitch {
  private state: LightState;

  constructor(initialState: LightState) {
    this.state = initialState;
  }

  public setState(state: LightState): void {
    this.state = state;
  }

  public pressSwitch(): void {
    this.state.switchState(this);
  }
}

class OnState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Turning the light OFF");

    lightSwitch.setState(new OffState());
  }
}

class OffState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Turning the light ON");
    
    lightSwitch.setState(new OnState());
  }
}