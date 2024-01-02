
export class routes {

  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get adminDashboard(): string {
    return this.baseUrl + '/dashboard/admin';
  }

}
