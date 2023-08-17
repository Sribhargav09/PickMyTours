import http from "../common/http";

class SignupDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/create-user/${id}`);
  }

  create(data) {
    return http.post("/create-user", data);
  }

  update(id, data) {
    return http.put(`/update-user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-user/${id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  
}

export default new SignupDataService();