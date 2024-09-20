class Stock1 {
  sell() { console.log('股票1卖出') }
  buy() { console.log('股票1买入') }
}

class Stock2 {
  sell() { console.log('股票2卖出') }
  buy() { console.log('股票2买入') }
}

class Stock3 {
  sell() { console.log('股票3卖出') }
  buy() { console.log('股票3买入') }
}

class Fund {
  stock1: Stock1
  stock2: Stock2
  stock3: Stock3

  constructor() {
    this.stock1 = new Stock1()
    this.stock2 = new Stock2()
    this.stock3 = new Stock3()
  }

  sell() {
    this.stock1.sell()
    this.stock2.sell()
    this.stock3.sell()
  }

  buy() {
    this.stock1.buy()
    this.stock2.buy()
    this.stock3.buy()
  }
}

function main() {
  const fund = new Fund()
  fund.buy()
  fund.sell()
}

main()

export { }
