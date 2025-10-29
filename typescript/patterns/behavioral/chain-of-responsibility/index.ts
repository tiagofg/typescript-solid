interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.\n`;
    }

    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.\n`;
    }

    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}.\n`;
    }
    
    return super.handle(request);
  }
}