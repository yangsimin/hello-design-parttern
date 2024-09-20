import { Operation, OperationAdd, OperationSub, OperationMul, OperationDiv } from './1.简单工厂模式'

interface Factory {
  createOperation(): Operation
}

class OperationAddFactory implements Factory {
  createOperation(): Operation {
    return new OperationAdd()
  }
}

class OperationSubFactory implements Factory {
  createOperation(): Operation {
    return new OperationSub()
  }
}

class OperationMulFactory implements Factory {
  createOperation(): Operation {
    return new OperationMul()
  }
}

class OperationDivFactory implements Factory {
  createOperation(): Operation {
    return new OperationDiv()
  }
}

function main() {
  const factory = new OperationAddFactory()
  const operation = factory.createOperation()
  operation.numA = 1
  operation.numB = 2
  console.log(operation.getResult())
}

main()

export { }  
