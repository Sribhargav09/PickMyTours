import http2 from "../common/http2";

class StripeService {
  registerCustomer(data) {
    return http2.post("/user/register", data);
  }

  addPaymentMethod(data) {
    return http2.post("/payment/method/attach", data);
  }

  createPayment(data) {
    return http2.post("/payment/create", data);
  }

  confirmPayment(data) {
    return http2.post("/payment/confirm", data);
  }
}

export default new StripeService();