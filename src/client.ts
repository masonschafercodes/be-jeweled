interface IClient {
  stripe_key: string;
  stripe_api_url: string;
}

export class BeJeweledClient {
  stripe_key: string;
  stripe_api_url: string;
  constructor({
    stripe_key,
    stripe_api_url = "https://api.stripe.com",
  }: IClient) {
    this.stripe_key = stripe_key;
    this.stripe_api_url = stripe_api_url;
  }

  async createCustomer(
    email: string | null,
    description: string | null,
    metadata: Object | null,
    name: string | null,
    phone: string | null
  ): Promise<any> {
    const response = await fetch(`${this.stripe_api_url}/v1/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${this.stripe_key}`,
      },
      body: `email=${email}&description=${description}&metadata=${JSON.stringify(
        metadata
      )}&name=${name}&phone=${phone}`,
    });

    return await response.json();
  }
}
