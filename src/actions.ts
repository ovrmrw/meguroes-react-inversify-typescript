import { injectable } from 'inversify'


@injectable()
export class Actions {

  goo(): string {
    return 'goo!'
  }

  choki(): string {
    return 'choki!'
  }

  paa(): string {
    return 'paa!'
  }

}
