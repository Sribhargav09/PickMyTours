import http from "../common/http";

class UsersDataService {
  getAll() {
    return http.get("/users");
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
    return http.delete(`/user`);
  }

  
}

export default new UsersDataService();