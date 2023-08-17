import http from "../common/http";

class SignupDataService {
  getAll() {
    return http.get("/signup");
  }

  get(id) {
    return http.get(`/create-signup/${id}`);
  }

  create(data) {
    return http.post("/create-signup", data);
  }

  update(id, data) {
    return http.put(`/update-signup/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-signup/${id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  
}

export default new SignupDataService();