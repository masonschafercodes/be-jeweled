interface IClient {
    stripe_key: string;
}
export declare class BeJeweledClient {
    stripe_key: string;
    constructor({ stripe_key }: IClient);
    getStripeKey(): Promise<string>;
}
export {};
