import { PaymentGatewayAdapter } from './PaymentGatewayAdapter';
import { ThirdPartyPaymentGateway } from './ThirdPartyPaymentGateway';

const thirdPartyGateway = new ThirdPartyPaymentGateway();
const paymentProcessor = new PaymentGatewayAdapter(thirdPartyGateway);

paymentProcessor.pay(100);
