export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

// This is a shortcut to eliminate having to manually assign and declare properties
//  constructor(public name: string, public amount: number) {
