import http2 from "../common/http2";

class WishlistDataService {
  create(data) {
    console.log(data);
    return http2.post("/addtowishlist", data);
  }
}

export default new WishlistDataService();