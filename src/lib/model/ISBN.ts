export function has10or13Digits(ISBN: string) {
  return ISBN.length === 10 || ISBN.length === 13;
}

export function check13DigitsBeginning(ISBN: string) {
  if (ISBN.length === 13) {
    return ISBN.startsWith('978') || ISBN.startsWith('979');
  }

  return false;
}

export function removeDashesAndSpaces(ISBN: string) {
  return ISBN.replace(/[\s-]/g, '');
}

export class ISBN {
  readonly value: string;
  constructor(chainString: string) {
    const ISBNValue: string = this.removeDashesAndSpaces(chainString);
    if ((this.has13Digits(ISBNValue) && this.check13DigitsBeginning(ISBNValue)) || this.has10Digits(ISBNValue)) {
      this.value = ISBNValue;
    } else {
      throw new Error('Wrong entry');
    }
  }

  private hasDigits(value: string): boolean {
    return /[0-9]/g.test(value);
  }

  private has10Digits(value: string): boolean {
    return this.hasDigits(value) && value.length === 10;
  }

  private has13Digits(value: string): boolean {
    return this.hasDigits(value) && value.length === 13;
  }

  public has10or13Digits(value: string): boolean {
    return this.has10Digits(value) || this.has13Digits(value);
  }

  public check13DigitsBeginning(value: string): boolean {
    if (value.length === 13) {
      return value.startsWith('978') || value.startsWith('979');
    }

    return false;
  }

  public removeDashesAndSpaces(value: string): string {
    return value.replace(/[\s-]/g, '');
  }
}
