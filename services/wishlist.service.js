import http2 from "../common/http2";

class WishlistDataService {
  create(data) {
    console.log(data);
    return http2.post("/addtowishlist", data);
  }

  getList(tourId, userId) {
    return http2.get(`/getWishList/${tourId}/${userId}`);
  }

  getByUserId(id) {
    return http2.get(`/getUsersWishList/${id}`);
  }

  delete(id) {
    return http2.delete(`/remove-wishlist/${id}`);
  }
}

export default new WishlistDataService();