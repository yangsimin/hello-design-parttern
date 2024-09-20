abstract class TestPaper {
  testQuestion1() {
    console.log('1 + 1 = ?')
    console.log('答案：' + this.answer1())
  }
  abstract answer1(): string

  testQuestion2() {
    console.log('1 + 2 = ?')
    console.log('答案：' + this.answer2())
  }
  abstract answer2(): string
}

class TestPaperA extends TestPaper {
  answer1(): string { return 'A' }
  answer2(): string { return 'B' }
}

class TestPaperB extends TestPaper {
  answer1(): string { return 'C' }
  answer2(): string { return 'D' }
}

function main() {
  const testPaperA: TestPaper = new TestPaperA()
  testPaperA.testQuestion1()
  testPaperA.testQuestion2()

  console.log('--------------------------------')

  const testPaperB: TestPaper = new TestPaperB()
  testPaperB.testQuestion1()
  testPaperB.testQuestion2()
}

main()

export { }
