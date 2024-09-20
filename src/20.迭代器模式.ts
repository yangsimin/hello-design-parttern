abstract class MyIterator {
  abstract first(): any
  abstract next(): any
  abstract isDone(): boolean
  abstract currentItem(): any
}

abstract class Aggregate {
  abstract createIterator(): MyIterator
}


class ConcreteIterator extends MyIterator {
  private aggregate: ConcreteAggregate
  private current: number = 0
  constructor(aggregate: ConcreteAggregate) {
    super()
    this.aggregate = aggregate
  }
  first(): any {
    return this.aggregate.getItem(0)
  }
  next(): any {
    this.current++
    if (this.isDone()) {
      return undefined
    }
    return this.aggregate.getItem(this.current)
  }
  isDone(): boolean {
    return this.current >= this.aggregate.count
  }
  currentItem(): any {
    return this.aggregate.getItem(this.current)
  }
}

class ConcreteIteratorDesc extends MyIterator {
  private aggregate: ConcreteAggregate
  private current: number = 0
  constructor(aggregate: ConcreteAggregate) {
    super()
    this.aggregate = aggregate
    this.current = aggregate.count - 1
  }
  first(): any {
    return this.aggregate.getItem(this.aggregate.count - 1)
  }
  next(): any {
    this.current--
    if (this.isDone()) {
      return undefined
    }
    return this.aggregate.getItem(this.current)
  }
  isDone(): boolean {
    return this.current < 0
  }
  currentItem(): any {
    return this.aggregate.getItem(this.current)
  }
}

class ConcreteAggregate extends Aggregate {
  private items: any[] = []
  createIterator(): MyIterator {
    return new ConcreteIterator(this)
  }
  get count(): number {
    return this.items.length
  }
  getItem(index: number): any {
    return this.items[index]
  }
  setItems(index: number, value: any) {
    this.items[index] = value
  }
}

function main() {
  const aggregate = new ConcreteAggregate()
  aggregate.setItems(0, '大鸟')
  aggregate.setItems(1, '小菜')
  aggregate.setItems(2, '行李')
  aggregate.setItems(3, '老外')
  aggregate.setItems(4, '公交内部员工')
  aggregate.setItems(5, '小偷')

  // const iterator = aggregate.createIterator()
  const iterator = new ConcreteIterator(aggregate)
  const item = iterator.first()
  while (!iterator.isDone()) {
    console.log(`${iterator.currentItem()} 请买车票`)
    iterator.next()
  }
}

main()
