interface IClient {
  stripe_key: string;
}

export class BeJeweledClient {
  stripe_key: string;
  constructor({ stripe_key }: IClient) {
    this.stripe_key = stripe_key;
  }

  async getStripeKey() {
    return this.stripe_key;
  }
}
