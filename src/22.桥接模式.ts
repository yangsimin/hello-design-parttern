abstract class HandsetSoft {
  abstract run(): void
}

class HandsetGame extends HandsetSoft {
  run() { console.log('运行手机游戏') }
}

class HandsetAddressList extends HandsetSoft {
  run() { console.log('运行手机通讯录') }
}

class HandsetMP3 extends HandsetSoft {
  run() { console.log('运行手机MP3') }
}

abstract class HandsetBrand {
  protected soft: HandsetSoft
  setHandsetSoft(soft: HandsetSoft) { this.soft = soft }
  abstract run(): void
}

class HandsetBrandN extends HandsetBrand {
  run() { this.soft.run() }
}

class HandsetBrandM extends HandsetBrand {
  run() { this.soft.run() }
}

class HandsetBrandS extends HandsetBrand {
  run() { this.soft.run() }
}

function main() {
  let ab: HandsetBrand

  ab = new HandsetBrandN()
  ab.setHandsetSoft(new HandsetGame())
  ab.run()

  ab = new HandsetBrandM()
  ab.setHandsetSoft(new HandsetGame())
  ab.run()

  ab = new HandsetBrandN()
  ab.setHandsetSoft(new HandsetAddressList())
  ab.run()

  ab = new HandsetBrandM()
  ab.setHandsetSoft(new HandsetAddressList())
  ab.run()

  ab = new HandsetBrandN()
  ab.setHandsetSoft(new HandsetMP3())
  ab.run()

  ab = new HandsetBrandM()
  ab.setHandsetSoft(new HandsetMP3())
  ab.run()
}

main()

export { }
