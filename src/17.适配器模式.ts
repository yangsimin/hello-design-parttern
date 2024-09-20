abstract class Player {
  constructor(protected name: string) { }

  abstract attack(): void
  abstract defense(): void
}

class ForwardsPlayer extends Player {
  attack() { console.log(`前锋 ${this.name} 进攻`) }
  defense() { console.log(`前锋 ${this.name} 防守`) }
}

class CenterPlayer extends Player {
  attack() { console.log(`中锋 ${this.name} 进攻`) }
  defense() { console.log(`中锋 ${this.name} 防守`) }
}

class GuardsPlayer extends Player {
  attack() { console.log(`后卫 ${this.name} 进攻`) }
  defense() { console.log(`后卫 ${this.name} 防守`) }
}

class ForeignCenter {
  name: string
  constructor() { }

  进攻() { console.log(`外籍中锋 ${this.name} 进攻`) }
  防守() { console.log(`外籍中锋 ${this.name} 防守`) }
}

class Translator extends Player {
  private foreignCenter: ForeignCenter = new ForeignCenter()

  constructor(public name: string) {
    super(name)
    this.foreignCenter.name = name
  }

  attack() { this.foreignCenter.进攻() }
  defense() { this.foreignCenter.防守() }
}

const player = new CenterPlayer('John')
player.attack()
player.defense()

const foreignCenter = new Translator('John')
foreignCenter.attack()
foreignCenter.defense()

export { }
