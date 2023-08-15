import http from "../common/http";

class UsersDataService {
  getAll() {
    return http.get("/add-user");
  }

  get(id) {
    return http.get(`/add-user/${id}`);
  }

  create(data) {
    return http.post("/create-add-user", data);
  }

  update(id, data) {
    return http.put(`/update-add-user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-add-user/${id}`);
  }

  deleteAll() {
    return http.delete(`/add-user`);
  }

  
}

export default new UsersDataService();