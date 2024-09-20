class Product {
  parts: string[] = []

  add(part: string) {
    this.parts.push(part)
  }

  show() {
    console.log(this.parts.join('\n'))
  }
}

abstract class Builder {
  abstract buildPartA(): void
  abstract buildPartB(): void
  abstract getResult(): Product
}

class ConcreteBuilder1 extends Builder {
  private product: Product = new Product()

  buildPartA(): void {
    this.product.add('Part A')
  }
  buildPartB(): void {
    this.product.add('Part B')
  }
  getResult(): Product {
    return this.product
  }
}

class ConcreteBuilder2 extends Builder {
  private product: Product = new Product()

  buildPartA(): void {
    this.product.add('Part A2')
  }
  buildPartB(): void {
    this.product.add('Part B2')
  }
  getResult(): Product {
    return this.product
  }
}

class Director {
  do(builder: Builder) {
    builder.buildPartA()
    builder.buildPartB()
  }
}

function main() {
  const director = new Director()
  const builder = new ConcreteBuilder1()
  const builder2 = new ConcreteBuilder2()

  director.do(builder)
  const product = builder.getResult()
  product.show()

  console.log('---')

  director.do(builder2)
  const product2 = builder2.getResult()
  product2.show()
}

main()

export { }
