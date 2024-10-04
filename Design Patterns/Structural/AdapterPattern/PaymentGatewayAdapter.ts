import { PaymentProcessor } from './PaymentProcessor';
import { ThirdPartyPaymentGateway } from './ThirdPartyPaymentGateway';

export class PaymentGatewayAdapter implements PaymentProcessor {
    constructor(private thirdPartyGateway: ThirdPartyPaymentGateway) {}

    pay(amount: number): void {
        this.thirdPartyGateway.makePayment(amount);
    }
}
