class Request {
  requestType: string
  requestContent: string
  number: number
}

abstract class Manager {
  constructor(protected name: string) { }
  protected superior: Manager
  setSuperior(superior: Manager) { this.superior = superior }
  abstract requestApplications(request: Request): void
}

class CommonManager extends Manager {
  requestApplications(request: Request): void {
    if (request.requestType === '请假' && request.number <= 2) {
      console.log(`${this.name}:${request.requestContent} 数量 ${request.number} 被批准`)
    } else {
      this.superior.requestApplications(request)
    }
  }
}

class MajorDomo extends Manager {
  requestApplications(request: Request): void {
    if (request.requestType === '请假' && request.number <= 5) {
      console.log(`${this.name}:${request.requestContent} 数量 ${request.number} 被批准`)
    } else {
      this.superior.requestApplications(request)
    }
  }
}

class GeneralManager extends Manager {
  requestApplications(request: Request): void {
    if (request.requestType === '请假') {
      console.log(`${this.name}:${request.requestContent} 数量 ${request.number} 被批准`)
    } else if (request.requestType === '加薪' && request.number <= 500) {
      console.log(`${this.name}:${request.requestContent} 数量 ${request.number} 被批准`)
    } else if (request.requestType === '加薪' && request.number > 500) {
      console.log(`${this.name}:${request.requestContent} 数量 ${request.number} 再说吧`)
    }
  }
}



function main() {
  const commonManager = new CommonManager('经理')
  const majorDomo = new MajorDomo('总监')
  const generalManager = new GeneralManager('总经理')

  commonManager.setSuperior(majorDomo)
  majorDomo.setSuperior(generalManager)

  const request1 = new Request()
  request1.requestType = '请假'
  request1.requestContent = '小菜请假'
  request1.number = 1
  commonManager.requestApplications(request1)

  const request2 = new Request()
  request2.requestType = '请假'
  request2.requestContent = '小菜请假'
  request2.number = 4
  commonManager.requestApplications(request2)

  const request3 = new Request()
  request3.requestType = '加薪'
  request3.requestContent = '小菜请求加薪'
  request3.number = 500
  commonManager.requestApplications(request3)

  const request4 = new Request()
  request4.requestType = '加薪'
  request4.requestContent = '小菜请求加薪'
  request4.number = 1000
  commonManager.requestApplications(request4)
}

main()

export { }
