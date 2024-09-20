abstract class Company {
  constructor(protected name: string) { }
  abstract add(component: Company): void
  abstract remove(component: Company): void
  display(depth: number): void {
    console.log(`${'-'.repeat(depth)} ${this.name}`)
  }
  abstract lineOfDuty(): void
}

class ConcreteCompany extends Company {
  private children: Company[] = []

  add(component: Company): void {
    this.children.push(component)
  }
  remove(component: Company): void {
    this.children = this.children.filter(c => c !== component)
  }
  display(depth: number): void {
    super.display(depth)
    this.children.forEach(c => c.display(depth + 2))
  }
  lineOfDuty(): void {
    this.children.forEach(c => c.lineOfDuty())
  }
}

class FinanceDepartment extends Company {
  add(): void { console.log('cannot add to a finance department') }
  remove(): void { }
  lineOfDuty(): void {
    console.log(`${this.name} 公司财务收支管理`)
  }
}

class HRDepartment extends Company {
  add(): void { console.log('cannot add to a HR department') }
  remove(): void { }
  lineOfDuty(): void {
    console.log(`${this.name} 员工招聘培训管理`)
  }
}

const root = new ConcreteCompany('北京总公司')
root.add(new HRDepartment('总公司人力资源部'))
root.add(new FinanceDepartment('总公司财务部'))

const comp = new ConcreteCompany('上海华东分公司')
comp.add(new HRDepartment('华东分公司人力资源部'))
comp.add(new FinanceDepartment('华东分公司财务部'))

const comp1 = new ConcreteCompany('南京办事处')
comp1.add(new HRDepartment('南京办事处人力资源部'))
comp1.add(new FinanceDepartment('南京办事处财务部'))

const comp2 = new ConcreteCompany('杭州办事处')
comp2.add(new HRDepartment('杭州办事处人力资源部'))
comp2.add(new FinanceDepartment('杭州办事处财务部'))

root.add(comp)
root.add(comp1)
root.add(comp2)

console.log('结构图：')
root.display(1)
console.log('\n职责：')
root.lineOfDuty()