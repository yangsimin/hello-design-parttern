abstract class Observer {
  protected name: string
  protected sub: Subject

  constructor(name: string, sub: Subject) {
    this.name = name
    this.sub = sub
  }

  abstract update(): void
}

abstract class Subject {
  abstract attach(observer: Observer): void
  abstract detach(observer: Observer): void
  abstract notify(): void
  abstract get secretaryAction(): string
  abstract set secretaryAction(action: string)
}

class Secretary extends Subject {
  private observers: Array<Observer> = []
  private action: string

  attach(observer: Observer) { this.observers.push(observer) }
  detach(observer: Observer) { this.observers = this.observers.filter(o => o !== observer) }
  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  get secretaryAction() { return this.action }
  set secretaryAction(action: string) { this.action = action }
}


class Boss extends Subject {
  private observers: Array<Observer> = []
  private action: string

  attach(observer: Observer): void { this.observers.push(observer) }
  detach(observer: Observer): void { this.observers = this.observers.filter(o => o !== observer) }
  notify(): void {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  get secretaryAction(): string { return this.action }
  set secretaryAction(action: string) { this.action = action }
}


class StockObserver extends Observer {
  update() {
    console.log(`${this.name}, 关闭股票行情。 收到通知：${this.sub.secretaryAction}`)
  }
}

class NBAObserver extends Observer {
  update() {
    console.log(`${this.name}, 关闭NBA直播。 收到通知：${this.sub.secretaryAction}`)
  }
}


function main() {
  const subject = new Boss()
  // const subject = new Secretary()
  const stockObserver1 = new StockObserver('张三', subject)
  const nbaObserver1 = new NBAObserver('王五', subject)

  subject.attach(stockObserver1)
  subject.attach(nbaObserver1)

  subject.detach(nbaObserver1)

  console.log('上班了...')

  setTimeout(() => {
    subject.secretaryAction = '老板我回来了！'
    subject.notify()
  }, 2000);
}

main()

export { }
