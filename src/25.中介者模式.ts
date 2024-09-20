abstract class UnitedNations {
  abstract declare(message: string, country: Country): void
}

abstract class Country {
  constructor(protected mediator: UnitedNations) { }
}

class USA extends Country {
  declare(message: string) {
    this.mediator.declare(message, this)
  }
  getMessage(message: string) {
    console.log(`美国获得对方信息: ${message}`)
  }
}

class Iraq extends Country {
  declare(message: string) {
    this.mediator.declare(message, this)
  }
  getMessage(message: string) {
    console.log(`伊拉克获得对方信息: ${message}`)
  }
}

class UnitedNationsSecurityCouncil extends UnitedNations {
  private usa: USA
  private iraq: Iraq

  setUSA(usa: USA) {
    this.usa = usa
  }
  setIraq(iraq: Iraq) {
    this.iraq = iraq
  }
  declare(message: string, country: Country) {
    if (country === this.usa) {
      this.iraq.getMessage(message)
    } else {
      this.usa.getMessage(message)
    }
  }
}

function main() {
  const securityCouncil = new UnitedNationsSecurityCouncil()
  const usa = new USA(securityCouncil)
  const iraq = new Iraq(securityCouncil)

  securityCouncil.setUSA(usa)
  securityCouncil.setIraq(iraq)

  usa.declare('不准研制核武器，否则发动战争')
  iraq.declare('我们没有核武器，我们不害怕战争')
}

main()

export { }