interface Decorator {
  show(): void
}

class Person implements Decorator {
  constructor(private name: string) { }
  show(): void {
    console.log('装扮的', this.name)
  }
}

class Finery implements Decorator {
  constructor(protected decorator: Decorator) { }
  show(): void {
    this.decorator.show()
  }
}

class TShirt extends Finery {
  show(): void {
    console.log('大T恤')
    super.show()
  }
}

class BigTrouser extends Finery {
  show(): void {
    console.log('垮裤')
    super.show()
  }
}

class Sneakers extends Finery {
  show(): void {
    console.log('破球鞋')
    super.show()
  }
}

function main() {
  const person = new Person('小菜')
  const tShirt = new TShirt(person)
  const bigTrouser = new BigTrouser(tShirt)
  const sneakers = new Sneakers(bigTrouser)
  sneakers.show()
}

main()

export { }
