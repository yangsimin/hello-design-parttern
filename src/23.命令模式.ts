abstract class Command {
  constructor(protected receiver: Barbecuer) { }
  abstract executeCommand(): void
}

class BakeMuttonCommand extends Command {
  executeCommand() { this.receiver.bakeMutton() }
}

class BakeChickenWingCommand extends Command {
  executeCommand() { this.receiver.bakeChickenWing() }
}

class Barbecuer {
  bakeMutton() { console.log('烤羊肉串') }
  bakeChickenWing() { console.log('烤鸡翅') }
}

class Waiter {
  private orders: Command[] = []

  setOrder(command: Command) {
    if (command instanceof BakeChickenWingCommand) {
      console.log('服务员：鸡翅没有了，请点别的烧烤')
    } else {
      this.orders.push(command)
      console.log(`增加订单：${command.constructor.name} 时间：${new Date().toLocaleString()}`)
    }
  }

  cancelOrder(command: Command) {
    this.orders = this.orders.filter(order => order !== command)
    console.log(`取消订单：${command.constructor.name} 时间：${new Date().toLocaleString()}`)
  }

  notify() { this.orders.forEach(order => order.executeCommand()) }
}

function main() {
  const boy = new Barbecuer()
  const bakeMuttonCommand1 = new BakeMuttonCommand(boy)
  const bakeMuttonCommand2 = new BakeMuttonCommand(boy)
  const bakeChickenWingCommand1 = new BakeChickenWingCommand(boy)

  const waiter = new Waiter()
  waiter.setOrder(bakeMuttonCommand1)
  waiter.setOrder(bakeMuttonCommand2)
  waiter.setOrder(bakeChickenWingCommand1)
  waiter.notify()
}

main()

export { }
