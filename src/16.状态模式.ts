class Work {
  private current: State

  constructor() {
    this.current = new ForenoonState()
  }

  private _hour: number
  get hour(): number {
    return this._hour
  }
  set hour(hour: number) {
    this._hour = hour
  }

  private _finish = false
  get taskFinished(): boolean {
    return this._finish
  }
  set taskFinished(finish: boolean) {
    this._finish = finish
  }

  setState(state: State) {
    this.current = state
  }

  writeProgram() {
    this.current.writeProgram(this)
  }
}

abstract class State {
  abstract writeProgram(work: Work): void
}

class ForenoonState extends State {
  writeProgram(w: Work): void {
    if (w.hour < 12) {
      console.log(`当前时间：${w.hour}点 上午工作，精神百倍`)
    } else {
      w.setState(new NoonState())
      w.writeProgram()
    }
  }
}

class NoonState extends State {
  writeProgram(w: Work): void {
    if (w.hour < 13) {
      console.log(`当前时间：${w.hour}点 饿了，午饭；犯困，午休。`)
    } else {
      w.setState(new AfternoonState())
      w.writeProgram()
    }
  }
}

class AfternoonState extends State {
  writeProgram(w: Work): void {
    if (w.hour < 17) {
      console.log(`当前时间：${w.hour}点 下午状态还不错，继续努力`)
    } else {
      w.setState(new EveningState())
      w.writeProgram()
    }
  }
}

class EveningState extends State {
  writeProgram(w: Work): void {
    if (w.taskFinished) {
      w.setState(new RestState())
      w.writeProgram()
    } else {
      if (w.hour < 21) {
        console.log(`当前时间：${w.hour}点 加班，疲惫至极`)
      } else {
        w.setState(new SleepingState())
        w.writeProgram()
      }
    }
  }
}

class SleepingState extends State {
  writeProgram(w: Work): void {
    console.log(`当前时间：${w.hour}点 不行了，睡着了`)
  }
}

class RestState extends State {
  writeProgram(w: Work): void {
    console.log(`当前时间：${w.hour}点 下班回家了`)
  }
}


function main() {
  const work = new Work()
  work.hour = 9
  work.writeProgram()
  work.hour = 10
  work.writeProgram()
  work.hour = 12
  work.writeProgram()
  work.hour = 13
  work.writeProgram()
  work.hour = 14
  work.writeProgram()
  work.hour = 17
  work.writeProgram()
  work.taskFinished = true
  work.writeProgram()

}

main()

export { }
