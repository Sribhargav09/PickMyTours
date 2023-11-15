import http2 from "../common/http2";

class WishlistDataService {
  create(data) {
    console.log(data);
    return http2.post("/addtowishlist", data);
  }

  getByTourId(id) {
    return http2.get(`/getWishList/${id}`);
  }

  getByUserId(id) {
    return http2.get(`/getUsersWishList/${id}`);
  }
}

export default new WishlistDataService();