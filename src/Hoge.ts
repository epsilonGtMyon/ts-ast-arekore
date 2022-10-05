

/**
 * Hogeクラスです。
 * あれこれします。
 */
class Hoge {
  /** 名前 */
  public firstName: string = ""
  /** 苗字 */
  public familyName: string = ""

  constructor(){

  }

  /**
   * フルネームを取得します。
   * @returns 
   */
  public getFullName(): string {
    return `${this.firstName} ${this.familyName}`
  }

  /**
   * Hogeを生成します。
   * @param firstName 
   * @param familyName 
   * @returns 
   */
  public static newHoge(firstName: string, familyName: string): Hoge {
    const hoge = new Hoge();
    hoge.firstName = firstName;
    hoge.familyName = familyName
    return hoge
  }
}

export {Hoge}