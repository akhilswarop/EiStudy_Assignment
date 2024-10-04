export class ThirdPartyPaymentGateway {
    makePayment(amountInDollars: number): void {
        console.log(`Payment of $${amountInDollars} made through third-party gateway.`);
    }
}
