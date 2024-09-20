abstract class Operation {
  numA: number
  numB: number
  abstract getResult(): number
}

class OperationAdd extends Operation {
  getResult(): number {
    return this.numA + this.numB
  }
}

class OperationSub extends Operation {
  getResult(): number {
    return this.numA - this.numB
  }
}

class OperationMul extends Operation {
  getResult(): number {
    return this.numA * this.numB
  }
}

class OperationDiv extends Operation {
  getResult(): number {
    if (this.numB === 0) {
      throw new Error('Division by zero')
    }
    return this.numA / this.numB
  }
}

class OperationFactory {
  static createOperation(operator: string): Operation {
    switch (operator) {
      case '+':
        return new OperationAdd()
      case '-':
        return new OperationSub()
      case '*':
        return new OperationMul()
      case '/':
        return new OperationDiv()
      default:
        throw new Error('Invalid operator')
    }
  }
}

class Operator {
  static getResult(numA: number, numB: number, operator: string) {
    let operation: Operation = OperationFactory.createOperation(operator)
    operation.numA = numA
    operation.numB = numB
    return operation.getResult()
  }
}

function main() {
  const numA = 10
  const numB = 2
  const operator = '-'
  const result = Operator.getResult(numA, numB, operator)
  console.log(result)
}

main()

export { Operation, OperationAdd, OperationSub, OperationMul, OperationDiv }
