export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public drinkpreference: string,
    public hobbies?: string[]
  ) {}
}
