export class AuthToken {
  static tokenItemName = 'token';

  static get(): string {
    return localStorage.getItem(this.tokenItemName) || '';
  }

  static set(token: string): void {
    localStorage.setItem(this.tokenItemName, token);
  }

  static clear(): void {
    this.set('');
  }
}
