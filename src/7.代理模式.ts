interface IGiveGift {
  giveDolls(): void
  giveFlowers(): void
  giveChocolate(): void
}

class Pursuit implements IGiveGift {
  constructor(private mm: SchoolGirl) { }

  giveDolls(): void {
    console.log(`${this.mm.name} 送你洋娃娃`)
  }

  giveFlowers(): void {
    console.log(`${this.mm.name} 送你鲜花`)
  }

  giveChocolate(): void {
    console.log(`${this.mm.name} 送你巧克力`)
  }
}

class PursuitProxy implements IGiveGift {
  private pursuit: Pursuit

  constructor(private mm: SchoolGirl) {
    this.pursuit = new Pursuit(mm)
  }

  giveDolls(): void {
    this.pursuit.giveDolls()
  }

  giveFlowers(): void {
    this.pursuit.giveFlowers()
  }

  giveChocolate(): void {
    this.pursuit.giveChocolate()
  }
}

class SchoolGirl {
  constructor(public name: string) { }
}


function main() {
  const jiaojiao = new SchoolGirl('娇娇')
  const daili = new PursuitProxy(jiaojiao)
  daili.giveDolls()
  daili.giveFlowers()
  daili.giveChocolate()
}

main()

export { }
