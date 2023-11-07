import http2 from "../common/http2";

class OrderUsersDataService {
  create(data) {
    console.log(data);
    return http2.post("/create-order", data);
  }
}

export default new OrderUsersDataService();