class GameRole {
  vitality: number
  attack: number
  defense: number

  stateDisplay() {
    console.log('角色当前状态：')
    console.log(`体力：${this.vitality}`)
    console.log(`攻击力：${this.attack}`)
    console.log(`防御力：${this.defense}`)
  }

  getInitState() {
    this.vitality = 100
    this.attack = 100
    this.defense = 100
  }

  fight() {
    this.vitality = 0
    this.attack = 0
    this.defense = 0
  }

  saveState() {
    return new RoleStateMemento(this.vitality, this.attack, this.defense)
  }

  recoveryState(memento: RoleStateMemento) {
    this.vitality = memento.vitality
    this.attack = memento.attack
    this.defense = memento.defense
  }
}

class RoleStateMemento {
  constructor(public vitality: number, public attack: number, public defense: number) { }
}

class RoleStateCaretaker {
  memento: RoleStateMemento
}


function main() {
  const lixiaoyao = new GameRole()
  lixiaoyao.getInitState()
  lixiaoyao.stateDisplay()

  const stateAdmin = new RoleStateCaretaker()
  stateAdmin.memento = lixiaoyao.saveState()

  console.log('\n-----fight-----')
  lixiaoyao.fight()
  lixiaoyao.stateDisplay()

  console.log('\n-----recovery-----')
  lixiaoyao.recoveryState(stateAdmin.memento)
  lixiaoyao.stateDisplay()
}

main()

export { }
