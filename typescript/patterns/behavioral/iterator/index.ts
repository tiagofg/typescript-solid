class ArrayIterator<T> {
  private collection: T[]
  private index: number = 0

  constructor(collection: T[]) {
    this.collection = collection
  }

  public next(): T | null {
    if (this.hasNext()) {
      return this.collection[this.index++] 
    }

    return null 
  }

  public hasNext(): boolean {
    return this.index < this.collection.length
  }
}