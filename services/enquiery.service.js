import http from "../common/http";

class EnquieryService {
  getAll() {
    return http.get("/enquiers");
  }

  get(id) {
    return http.get(`/enquiery/${id}`);
  }

  create(data) {
    return http.post("/create-enquiery", data);
  }

  update(id, data) {
    return http.put(`/update-enquiery/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-enquiery/${id}`);
  }

  deleteAll() {
    return http.delete(`/enquiers`);
  }

  findByTitle(title) {
    return http.get(`/enquiers?title=${title}`);
  }
}

export default new EnquieryService();