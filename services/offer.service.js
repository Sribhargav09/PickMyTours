import http from "../common/http";

class OfferService {
  getAll() {
    return http.get("/offers");
  }

  get(id) {
    return http.get(`/offer/${id}`);
  }

  create(data) {
    return http.post("/create-offer", data);
  }

  update(id, data) {
    return http.put(`/update-offer/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-offer/${id}`);
  }

  deleteAll() {
    return http.delete(`/offers`);
  }

  findByTitle(title) {
    return http.get(`/offers?title=${title}`);
  }
}

export default new OfferService();