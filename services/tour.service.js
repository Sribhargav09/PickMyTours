import http from "../common/http";

class TourDataService {
  getAll() {
    return http.get("/tours");
  }

  get(id) {
    return http.get(`/tour/${id}`);
  }

  create(data) {
    return http.post("/create-tour", data);
  }

  update(id, data) {
    return http.put(`/update-tour/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-tour/${id}`);
  }

  deleteAll() {
    return http.delete(`/tours`);
  }

  findByTitle(title) {
    return http.get(`/tours?title=${title}`);
  }
}

export default new TourDataService();