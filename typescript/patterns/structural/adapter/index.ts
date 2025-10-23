class Rectangle {
  constructor(private width: number, private height: number) { }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square {
  constructor(private side: number) { }

  getSide(): number {
    return this.side;
  }

  area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter extends Rectangle {
  constructor(private square: Square) {
    super(square.getSide(), square.getSide());
  }

  getWidth(): number {
    return this.square.getSide();
  }

  getHeight(): number {
    return this.square.getSide();
  }

  area(): number {
    return this.square.area();
  }
}