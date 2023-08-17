import http from "../common/http";

class TourTypeDataService {
  getAll() {
    return http.get("/tourTypes");
  }

  get(id) {
    return http.get(`/tourType/${id}`);
  }

  create(data) {
    return http.post("/create-tourType", data);
  }

  update(id, data) {
    return http.put(`/update-tourType/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-tourType/${id}`);
  }

  deleteAll() {
    return http.delete(`/tourTypes`);
  }

  findByTitle(title) {
    return http.get(`/tourTypes?title=${title}`);
  }
}

export default new TourTypeDataService();