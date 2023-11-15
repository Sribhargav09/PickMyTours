import http2 from "../common/http2";

class OrderUsersDataService {
  create(data) {
    console.log(data);
    return http2.post("/create-order", data);
  }

  getBookings(userId) {
    return http2.get(`/bookings/${userId}`);
  }
}

export default new OrderUsersDataService();