
export class routes {

  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get Home(): string {
    return this.baseUrl + '/Dashboard';
  }

}
