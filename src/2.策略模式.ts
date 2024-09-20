abstract class CashSuper {
  abstract acceptCash(money: number): number
}

class CashNormal extends CashSuper {
  acceptCash(money: number): number {
    return money
  }
}

class CashRebate extends CashSuper {
  constructor(private moneyRebate: number) {
    super()
  }
  acceptCash(money: number): number {
    return money * this.moneyRebate
  }
}

class CashReturn extends CashSuper {
  constructor(private moneyCondition: number, private moneyReturn: number) {
    super()
  }
  acceptCash(money: number): number {
    if (money >= this.moneyCondition) {
      return money - Math.floor(money / this.moneyCondition) * this.moneyReturn
    }
    return money
  }
}

type Type = 'normal' | 'rebate-8' | 'return-300-100'


class CashContext {
  cs: CashSuper
  constructor(type: Type) {

    switch (type) {
      case 'normal':
        this.cs = new CashNormal()
      case 'rebate-8':
        this.cs = new CashRebate(0.8)
      case 'return-300-100':
        this.cs = new CashReturn(300, 100)
      default:
        this.cs = new CashNormal()
    }
  }

  GetResult(money: number) {
    return this.cs.acceptCash(money)
  }
}

function main() {
  const price = 400
  const num = 1
  const cashContext = new CashContext('rebate-8')
  const totalPrice = cashContext.GetResult(price * num)
  console.log(totalPrice)
}

main()

export { }
